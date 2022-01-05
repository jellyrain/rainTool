import { Str } from './string/index'
import { Uid } from './uid/index'

function str(str: string): Str {
    return new Str(str)
}

function uid(length: number): Uid {
    return new Uid(length)
}

export { str, uid }