import { time, number, string, symbols, custom } from './uid'

class Uid {
    constructor(public length: number) { }

    time(progressiveSystem: number): string {
        return time(progressiveSystem)
    }

    number(): number {
        return number(this.length)
    }

    string(): string {
        return string(this.length)
    }

    symbols(): string {
        return symbols(this.length)
    }

    custom(str: string): string {
        return custom(str, this.length)
    }
}

export { Uid }