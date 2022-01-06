import { Str } from './string/index'
import { Uid } from './uid/index'
import { Bus } from './bus/index'
import { PubSub } from './pubsub/index'
import { Lookup } from './lookup/index'
import { Clone } from './clone/index'
import { Sleep } from './sleep/index'
import { DeTh } from './deth/index'

function str(str: string): Str {
    return new Str(str)
}

function uid(length: number): Uid {
    return new Uid(length)
}

function bus(): Bus {
    return new Bus()
}

function pubsub(): PubSub {
    return new PubSub()
}

function lookup(obj: object): Lookup {
    return new Lookup(obj)
}

function clone(target: object): Clone {
    return new Clone(target)
}

function sleep(func: Function): Sleep {
    return new Sleep(func)
}

function deth(func: Function): DeTh {
    return new DeTh(func)
}

export { str, uid, bus, pubsub, lookup, clone, sleep, deth }