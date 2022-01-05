function time(progressiveSystem: number): string {
    return (Math.random() * Date.now()).toString(progressiveSystem).replace('.', '')
}

function number(length: number): number {
    return Math.round(Math.random() * Math.pow(10, length))
}

function string(length: number): string {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += str[Math.floor(Math.random() * (str.length))]
    }
    return result
}

function symbols(length: number): string {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$!%*#_~?&^'
    let result = ''
    for (let i = 0; i < length; i++) {
        result += str[Math.floor(Math.random() * (str.length))]
    }
    return result
}

function custom(str: string, length: number): string {
    let result = ''
    for (let i = 0; i < length; i++) {
        result += str[Math.floor(Math.random() * (str.length))]
    }
    return result
}

export { time, number, string, symbols, custom }