function reverse(str: string): string {
    return str.split('').reverse().join('')
}

function palindrome(str: string): boolean {
    return str === reverse(str)
}

function truncate(str: string, num: number): string {
    return str.length > num ? str.slice(0, num) + '...' : str
}

export { reverse, palindrome, truncate }