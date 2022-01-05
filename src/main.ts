import { Str } from './string/index'
import { Uid } from './uid/index'
import { Bus } from './bus/index'
import { PubSub } from './pubsub/index'
import { Lookup } from './lookup/index'


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

export { str, uid, bus, pubsub, lookup }