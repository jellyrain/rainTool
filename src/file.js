import { uuid } from './method'
import { round } from './calculate'
import { SparkMD5 } from './spark-md5'

var files = {}

// 绑定 input 获取 change 事件 的 file 并且 把自身和转化格式保存在一个随机生成的id对象中 把这个对象存储在 内部对象组中 等待使用 
export function binding(element) {
    element.addEventListener('change', function (event) {
        for (var i = 0; i < event.target.files.length; i++) {
            var id = uuid.string(8), file = event.target.files[i];
            files[id] = { file: file, filename: file.name, filetype: file.type, fileSize: `${round((file.size / 1024 / 1024), 1)} M`, size: file.size }
            ids.push(id)
            processing(file, id)
        }
    })
}

// 内部转化格式使用的方法
function processing(file, id) {
    base64(file, function (data) {
        files[id]['base64'] = data
    })
    arrayBuffer(file, function (data) {
        var spark = new SparkMD5.ArrayBuffer()
        spark.append(data)
        files[id]['md5'] = spark.end()
    })
    path(file, function (data) {
        files[id]['path'] = data
    })
}

// 提供 一个文件对象和回调函数 把文件转换成 base64 返回给回调函数
export function base64(file, callback) {
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (event) {
        callback(event.target.result)
    }
}

// 提供 一个文件对象和回调函数 读取文件内容 返回给回调函数
export function text(file, callback) {
    var fileReader = new FileReader()
    fileReader.readAsText(file)
    fileReader.onload = function (event) {
        callback(event.target.result)
    }
}

// 提供 一个文件对象和回调函数 把文件转换成 ArrayBuffer 返回给回调函数
export function arrayBuffer(file, callback) {
    var fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)
    fileReader.onload = function (event) {
        callback(event.target.result)
    }
}

// 提供 一个文件对象和回调函数 把文件转换成 md5 返回给回调函数
export function md5(file, callback) {
    arrayBuffer(file, function (data) {
        var spark = new SparkMD5.ArrayBuffer()
        spark.append(data)
        callback(spark.end())
    })
}

// 提供 一个文件对象和回调函数 把文件转换成 路径 返回给回调函数
export function path(file, callback) {
    var filepath = URL.createObjectURL(file)
    callback(filepath)
}

// 提供 一个 file 的id 释放 内存中不用的 引用路径
export function revokePath(id) {
    URL.revokeObjectURL(files[id].path)
}

// 文件切片 实现
function fileSlicing(file, quantity, chunkSize, markings, callback) {
    var chunks = []
    var suffix = file.name.split('.')[1]
    md5(file, function (data) {
        for (var i = 0; i < quantity; i++) {
            chunks.push({
                file: file.slice(i * chunkSize, (i + 1) * chunkSize),
                filename: data + markings(i) + '.' + suffix
            })
        }
        callback({
            filename: file.name,
            fileHash: data,
            hashFilename: data + '.' + suffix,
            fileSize: file.size,
            chunkQuantity: quantity,
            chunkSize: chunkSize,
            chunks: chunks
        })
    })
}

// 提供 一个文件 切片数量 连接标识 回调函数 返回切片后的对象
export function fileSlicingByQuantity(file, quantity, markings, callback) {
    var chunkSize = Math.ceil(file.size / quantity)
    fileSlicing(file, quantity, chunkSize, markings, callback)
}

// 提供 一个文件 切片大小 连接标识 回调函数 最大切片数量（可选） 返回切片后的对象
export function fileSlicingByChunkSize(file, chunkSize, markings, callback, maxQuantity) {
    var quantity = Math.ceil(file.size / (chunkSize * 1024))
    if (maxQuantity) if (maxQuantity < quantity) {
        fileSlicingByQuantity(file, maxQuantity, markings, callback)
        return
    }
    fileSlicing(file, quantity, (chunkSize * 1024), markings, callback)
}

// 一次性获取 files 内部对象组
export function read() {
    return files
}

// 获取 files 内部对象组 全部 file对象的 id
export function readId() {
    var ids = []
    for (var key in files) {
        ids.push(key)
    }
    return ids
}

// 提供 file id 获取 files 内部对象组 对应 file 对象
export function getFileById(id) {
    return files[id]
}

// 提供 file id 删除 files 内部对象组 对应 file 对象
export function fileDelete(id) {
    delete files[id]
}

// 清空 files 内部对象组 所有 file 对象
export function clear() {
    var ids = readId()
    for (var i = 0; i < ids.length; i++) {
        revokePath(ids[i])
    }
    files = {}
}

export var version = '1.6.0'