import { reverse, palindrome, truncate } from './string'

class Str {
    constructor(public str: string) { }

    reverse(): string {
        return reverse(this.str)
    }
    palindrome(): boolean {
        return palindrome(this.str)
    }
    truncate(number: number): string {
        return truncate(this.str, number)
    }
}

export { Str }