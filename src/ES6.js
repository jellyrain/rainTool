// 改变 this 立即执行 传入参数 是一个个值 
function call(func, obj, ...args) {
    obj.jellyRainTemp = func
    const result = obj.jellyRainTemp(...args)
    delete obj.jellyRainTemp
    return result
}

// 改变 this 立即执行 传入参数 是数组
function apply(func, obj, args) {
    obj.jellyRainTemp = func
    const result = obj.jellyRainTemp(...args)
    delete obj.jellyRainTemp
    return result
}

// 改变 this 返回改变this的函数
function bind(func, obj, ...args) {
    return function (...argsR) {
        call(func, obj, ...args, ...argsR)
    }
}

// 数值去重
function unique(array) {
    return [...new Set(array)]
}

// 数组合并
function concat(array, ...args) {
    let result = [...array]
    args.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...item)
        } else {
            result.push(item)
        }
    })
    return result
}

// 数组扁平化
function flatten(array) {
    let arr = [].concat(...array)
    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

// 深拷贝 
function deepClone(target, map = new Map()) {
    if (typeof target === 'object' && target != null) {
        if (map.get(target)) return target
        const isArray = Array.isArray(target)
        let result = isArray ? [] : {}
        map.set(target, result)
        if (isArray) {
            target.forEach((item, index) => {
                result[index] = deepClone(item, map)
            })
        } else {
            Object.keys(target).forEach(key => {
                result[key] = deepClone(target[key], map)
            })
        }
    } else {
        return target
    }

}

