import { reverse, palindrome, truncate } from './string'

class Str {
    constructor(public str: string) { }
    reverse() {
        reverse(this.str)
    }
    palindrome() {
        palindrome(this.str)
    }
    truncate(number: number) {
        truncate(this.str, number)
    }
}

export { Str }