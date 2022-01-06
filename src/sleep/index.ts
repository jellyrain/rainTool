class Sleep {
    constructor(public func: Function) { }

    s(seconds: number) {
        setTimeout(() => {
            return this.func()
        }, seconds * 1000)
    }

    sync(seconds: number) {
        const start = new Date().getTime()
        while (new Date().getTime() - start < seconds * 1000) { }
        return this.func()
    }

    promise(seconds: number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.func())
            }, seconds * 1000);
        })
    }
}

export { Sleep }