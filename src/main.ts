import { Str } from './string/index'
import { Uid } from './uid/index'
import { Bus } from './bus/index'
import { PubSub } from './pubsub/index'


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

export { str, uid, bus, pubsub }