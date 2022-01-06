class DeTh {
    constructor(public func: Function) { }

    debounce(seconds: number, immediate: boolean): Function {
        let timeout: NodeJS.Timeout | null
        const func = this.func
        return function () {
            const args: IArguments = arguments

            if (timeout) clearTimeout(timeout)

            if (immediate) {
                if (!timeout) func.apply(null, args)
                timeout = setTimeout(() => {
                    timeout = null
                }, seconds * 1000)
            } else {
                timeout = setTimeout(() => {
                    func.apply(null, args)
                }, seconds * 1000)
            }
        }
    }

    throttle(seconds: number, immediate: boolean): Function {
        let timeout: NodeJS.Timeout | null
        const func = this.func
        return function () {
            const args: IArguments = arguments
            if (immediate) {
                if (!timeout) {
                    func.apply(null, args)
                    timeout = setTimeout(() => {
                        timeout = null
                    }, seconds * 1000)
                }
            } else {
                if (!timeout) {
                    timeout = setTimeout(() => {
                        timeout = null
                        func.apply(null, args)
                    }, seconds * 1000)
                }
            }
        }
    }

    all(seconds: number, immediate: boolean): Function[] {
        return [this.debounce(seconds, immediate), this.throttle(seconds, immediate)]
    }
}

export { DeTh }