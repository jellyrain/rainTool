// 模拟 new 创建实例 如果有返回值 而且是 对象就返回对象 不是就返回创建的实例
export function newInstance(func) {
    var obj = {}
    var args = Array.prototype.slice.call(arguments, 1)
    var result = func.apply(obj, args)
    obj.__proto__ = func.prototype
    return result instanceof Object ? result : obj
}

// 模拟 instanceof 检查实例
export function myInstanceof(obj, func) {
    var prototype = func.prototype
    var proto = obj.__proto__
    while (proto) {
        if (proto === prototype) return true
        proto = proto.__proto__
    }
    return false
}

// 合并多个对象
export function mergeObject() {
    var result = {}
    for (var i = 0; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            if (result.hasOwnProperty(key)) {
                result[key] = [].concat(result[key], arguments[i][key])
            } else {
                result[key] = arguments[i][key]
            }
        }
    }
    return result
}

export var version = '1.1.0'