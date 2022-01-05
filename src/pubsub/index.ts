import { Uid } from '../uid/index'

class PubSub {
    callbacks: any
    constructor() {
        this.callbacks = {}
    }

    subscribe(channel: string, func: Function): string {
        const id = new Uid(16).string()
        this.callbacks[channel] ? this.callbacks[channel][id] = func : this.callbacks[channel] = {}, this.callbacks[channel][id] = func // 兼容IE
        return id
    }

    publish(channel: string, data: any): PubSub {
        if (this.callbacks[channel]) {
            for (let key in this.callbacks[channel]) {
                this.callbacks[channel][key](data)
            }
        }
        return this
    }

    unsubscribe(key: string): PubSub {
        if (key) {
            if (typeof key === 'string') {
                if (key in this.callbacks) {
                    delete this.callbacks[key]
                } else {
                    for (let k in this.callbacks) {
                        for (let k2 in this.callbacks[k]) {
                            if (k2 === key) delete this.callbacks[k][k2]
                            break
                        }
                    }
                }

            }
        } else {
            this.callbacks = {}
        }
        return this
    }

    global(key: string): PubSub {
        (window as any)[key] = this
        return this
    }
}

export { PubSub }