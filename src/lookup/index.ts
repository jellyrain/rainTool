function l(path: string): string[] {
    path = path.replace(/\]/g, '')
    const pathArray: string[] = []
    let str: string = ''
    for (const item of path) {
        if (item != '.' && item != '[') {
            str += item
        } else {
            pathArray.push(str)
            str = ''
        }
    }
    if (str !== '' && str != null) pathArray.push(str)
    return pathArray
}

function v(object: object, pathArray: string[]): string {
    let temp: any = object
    for (const item of pathArray) {
        temp = temp[item]
    }
    return temp
}

class Lookup {
    object: object
    pathArray: string[]
    value: string
    constructor(obj: object) {
        this.object = obj
        this.pathArray = []
        this.value = ''
    }

    find(path: string): Lookup {
        this.pathArray = l(path)
        this.value = v(this.object, this.pathArray)
        return this
    }

    replace(obj: object): Lookup {
        this.object = obj
        return this
    }
}

export { Lookup }