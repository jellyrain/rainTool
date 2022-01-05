function reverse(str: string) {
    return str.split('').reverse().join('')
}

function palindrome(str: string) {
    return str === reverse(str)
}

function truncate(str: string, num: number) {
    return str.length > num ? str.slice(0, num) + '...' : str
}

export { reverse, palindrome, truncate }