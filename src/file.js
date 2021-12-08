import { uuid } from './method'
import { round } from './calculate'
import { SparkMD5 } from './spark-md5'

var files = {}

export function binding(element) {
    element.addEventListener('change', function (event) {
        for (var i = 0; i < event.target.files.length; i++) {
            var id = uuid.string(8), file = event.target.files[i];
            files[id] = { file: file, filename: file.name, filetype: file.type, fileSize: `${round((file.size / 1024 / 1024), 1)} M`, size: file.size }
            processing(file, id)
        }
    })
}

function processing(file, id) {
    base64(file, function (data) {
        files[id]['base64'] = data
    })
    arrayBuffer(file, function (data) {
        var spark = new SparkMD5.ArrayBuffer()
        spark.append(data)
        files[id]['md5'] = spark.end()
    })
}

export function base64(file, callback) {
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function (event) {
        callback(event.target.result)
    }
}

export function text(file, callback) {
    var fileReader = new FileReader()
    fileReader.readAsText(file)
    fileReader.onload = function (event) {
        callback(event.target.result)
    }
}

export function arrayBuffer(file, callback) {
    var fileReader = new FileReader()
    fileReader.readAsArrayBuffer(file)
    fileReader.onload = function (event) {
        callback(event.target.result)
    }
}

export function md5(file, callback) {
    arrayBuffer(file, function (data) {
        var spark = new SparkMD5.ArrayBuffer()
        spark.append(data)
        callback(spark.end())
    })
}

export function read() {
    return files
}

export function fileDelete(id) {
    delete files[id]
}

export function clear() {
    files = {}
}

export var version = '1.2.0'