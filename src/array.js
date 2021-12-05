// 创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。
export function map(array, callback) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array))
    }
    return result
}

// 对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回
export function reduce(array, callback, initialValue) {
    var result, i
    if (initialValue == undefined) {
        result = array[0]
        i = 1
    } else {
        result = initialValue
        i = 0
    }
    while (i < array.length) {
        result = callback(result, array[i], i, array)
    }
    return result
}

// 创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 
export function filter(array, callback) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) result.push(array[i])
    }
    return result
}

// 返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
export function find(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return array[i]
    }
    return undefined
}

// 返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
export function findIndex(array, callback) {
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return i
    }
    return -1
}

// 测试一个数组内的 所有元素 是否都能通过某个指定函数的测试。它返回一个布尔值。
// 注意：若收到一个空数组，此方法在一切情况下都会返回 true。
export function every(array, callback) {
    if (array.length === 0) return true
    for (var i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) return false
    }
    return true
}

// 测试数组中是不是 至少有1个元素 通过了被提供的函数测试。它返回的是一个Boolean类型的值。
// 注意：如果用一个空数组进行测试，在任何情况下它返回的都是false。
export function some(array, callback) {
    if (array.length === 0) return false
    for (var i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) return true
    }
    return false
}

// 数组去重
export function unique(array) {
    var result = [], obj = {}
    for (var i = 0; i < array.length; i++) {
        if (obj[array[i]] == undefined) {
            obj[array[i]] = true
            result.push(array[i])
        }
    }
    return result
}

// 数组切片
export function slice(array, begin, end) {
    var result = []
    // 数组为空 || begin 超出原数组的索引范围 || begin 大于 end
    if (array.length === 0 || begin >= array.length || end <= begin) return []
    begin = begin || 0
    if (begin < 0) begin = array.length + begin
    end = end || array.length
    if (end > array.length) end = array.length
    if (end < 0) end = array.length + end
    for (var i = begin; i < end; i++) {
        result.push(array[i])
    }
    return result
}

// 数组扁平化
export function flatten(array) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        array[i].constructor === Array ? result = result.concat(flatten(array[i])) : result.push(array[i])
    }
    return result
}

// 数组分块
export function chunk(array, size) {
    var result = [], TempArray = []
    size = size || 1
    for (var i = 0; i < array.length; i++) {
        TempArray.push(array[i])
        if (TempArray.length === size || i === array.length - 1) {
            result.push(TempArray)
            TempArray = []
        }
    }
    return result
}

// 数组取差异
export function difference(array1, array2) {
    var result = [], lock = false
    if (array1.length === 0) return []
    if (array2.length === 0) return array1.slice()
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) lock = true
        }
        if (!lock) result.push(array1[i])
        lock = false
    }
    return result
}

// 删除数组中部分元素
export function pull(array) {
    var result = []
    var tempArray = Array.prototype.slice.call(arguments, 1)
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < tempArray.length; j++) {
            if (array[i] === tempArray[j]) {
                result.push(array[i])
                array.splice(i, 1)
                i--
            }
        }
    }
    return result
}

// 删除数组中部分元素 参数变为数组
export function pullAll(array, valuesArray) {
    var result = []
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < valuesArray.length; j++) {
            if (array[i] === valuesArray[j]) {
                result.push(array[i])
                array.splice(i, 1)
                i--
            }
        }
    }
    return result
}

export var version = '1.4.0'