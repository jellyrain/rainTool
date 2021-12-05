// 字符串颠倒
export function reverse(str) {
    return str.split('').reverse().join('')
}

// 字符串是否 正反都一样
export function palindrome(str) {
    return str === reverse(str)
}

// 截取字符串: 字符串的长度超过了num, 截取前面num长度部分, 并以...结束
export function truncate(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str
}

export var version = '1.0.0'