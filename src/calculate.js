// 加
export function add(augend, addend) {
    return parseFloat(augend) + parseFloat(addend)
}

// 减
export function subtract(minuend, subtrahend) {
    return minuend - subtrahend
}

// 乘
export function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand
}

// 除
export function divide(dividend, divisor, precision) {
    return precision == undefined ? dividend / divisor : (dividend / divisor).toFixed(precision)
}

// 幂
export function power(bottomLine, exponential) {
    return Math.pow(bottomLine, exponential)
}

// 余
export function remainder(dividend, divisor) {
    return dividend % divisor
}

// 数组求和 1层
export function sum(array) {
    var sum = 0
    var temp = array.concat()
    for (var i = 0; i < temp.length; i++) {
        temp[i] = parseFloat(temp[i])
        sum += temp[i]
    }
    return sum
}

// 数组对象 自己选层 相加
export function sumBy(array, callback) {
    var sum = 0
    var temp = array.concat()
    for (var i = 0; i < temp.length; i++) {
        temp[i] = callback(temp[i])
        temp[i] = parseFloat(temp[i])
        sum += temp[i]
    }
    return sum
}

// 最小值 1层
export function min(array) {
    var temp = array.concat()
    var min = parseFloat(temp[0])
    for (var i = 1; i < temp.length; i++) {
        temp[i] = parseFloat(temp[i])
        if (min > temp[i]) min = temp[i]
    }
    return min
}

// 数组对象 自己选层 最小值
export function minBy(array, callback) {
    var temp = array.concat()
    var min = parseFloat(temp[0])
    for (var i = 1; i < temp.length; i++) {
        temp[i] = parseFloat(callback(temp[i]))
        if (min > temp[i]) min = temp[i]
    }
    return min
}

// 最大值 1层
export function max(array) {
    var temp = array.concat()
    var max = parseFloat(temp[0])
    for (var i = 1; i < temp.length; i++) {
        temp[i] = parseFloat(temp[i])
        if (max < temp[i]) max = temp[i]
    }
    return max
}

// 数组对象 自己选层 最大值
export function maxBy(array, callback) {
    var temp = array.concat()
    var max = parseFloat(temp[0])
    for (var i = 1; i < temp.length; i++) {
        temp[i] = parseFloat(callback(temp[i]))
        if (max < temp[i]) max = temp[i]
    }
    return max
}

// 平均值
export function mean(array) {
    return sum(array) / array.length
}

// 绝对值
export function abs(number, precision) {
    return precision == undefined ? Math.abs(number) : round(Math.abs(number), precision)
}

// 值 是否 在范围内 在返回 本身 不在返回 最靠近的界限值
export function clamp(number, lower, upper) {
    if (lower <= number && number <= upper) return parseFloat(number)
    if (upper < number) return upper
    if (number < lower) return lower
}

// 值 是否 在范围内 返回布尔值
export function inRange(number, lower, upper) {
    return lower <= number && number <= upper
}

// 向上取整
export function ceil(number, precision) {
    return Math.ceil(number * power(10, precision)) / power(10, precision)
}

// 向下取整
export function floor(number, precision) {
    return Math.floor(number * power(10, precision)) / power(10, precision)
}

// 四舍五入 
export function round(number, precision) {
    return Math.round(number * power(10, precision)) / power(10, precision)
}

// 随机数
export function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

export var version = '1.2.0'