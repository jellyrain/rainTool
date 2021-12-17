import { uuid } from './method'

var listenerData = {}
var keyIdData = {}
var prevObj = {}

// 注册对象
export function register(obj) {
    var objId = uuid.string(8)
    listenerData[objId] = {}
    keyIdData[objId] = {}
    prevObj[objId] = obj
    for (var key in obj) {
        var keyId = uuid.string(10)
        keyIdData[objId][key] = keyId
        listenerData[objId][keyId] = obj[key]
    }
    return {
        objId: objId,
        listenObj: listenerData[objId]
    }
}

// 监听其中一项属性
export function listen(id, key, getCallback, setCallback) {
    Object.defineProperty(listenerData[id], key, {
        get: function () {
            if (typeof getCallback === 'function') getCallback(listenerData[id][keyIdData[id][key]])
            return listenerData[id][keyIdData[id][key]]
        },
        set: function (value) {
            if (typeof setCallback === 'function') {
                var newValue = setCallback(listenerData[id][keyIdData[id][key]], value)
                if (newValue != undefined) value = newValue
            }
            listenerData[id][keyIdData[id][key]] = value
            prevObj[id][key] = value
        }
    })
}

// 监听全部属性
export function listenAll(id, getCallback, setCallback) {
    for (var key in keyIdData[id]) {
        listen(id, key, getCallback, setCallback)
    }
}

// 查看内部对象
export function read() {
    return { listenerData, keyIdData, prevObj }
}

export var version = '1.2.0'