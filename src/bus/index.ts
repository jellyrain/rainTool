class Bus {
    callbacks: any
    constructor() {
        this.callbacks = {}
    }
    on(key: string, func: Function): Bus {
        this.callbacks[key] ? this.callbacks[key].push(func) : this.callbacks[key] = [func]
        return this
    }
    off(key: string | undefined): Bus {
        key ? delete this.callbacks[key] : this.callbacks = {}
        return this
    }
    emit(key: string, data: any): Bus {
        if (this.callbacks[key] && this.callbacks[key].length > 0) {
            for (let i = 0; i < this.callbacks[key].length; i++) {
                this.callbacks[key][i](data)
            }
        }
        return this
    }
    global(key: string): Bus {
        (window as any)[key] = this
        return this
    }
}

export { Bus }