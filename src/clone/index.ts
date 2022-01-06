function c(target: any): any {
    if (typeof target === 'object' && target != null) {
        const result: any = Array.isArray(target) ? [] : {}
        for (let key in target) {
            if (target.hasOwnProperty(key)) result[key] = target[key]
        }
        return result
    } else {
        return target
    }
}

function d(target: any, map: Map<any, any> = new Map()): any {
    if (typeof target === 'object' && target != null) {
        if (map.get(target)) return target
        const isArray: boolean = Array.isArray(target)
        let result: any = isArray ? [] : {}
        map.set(target, true)
        if (isArray) {
            target.forEach((item: any, index: any) => {
                result[index] = d(item, map)
            })
        } else {
            Object.keys(target).forEach(key => {
                result[key] = d(target[key], map)
            })
        }
        return result
    } else {
        return target
    }
}

class Clone {
    constructor(public target: any) { }

    clone(): any {
        return c(this.target)
    }

    deepClone(): any {
        return d(this.target)
    }
}

export { Clone }