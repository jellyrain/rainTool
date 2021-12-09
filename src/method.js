/**
 * @debounce 函数防抖
 * @param {*} func 函数
 * @param {*} wait 延迟执行秒数
 * @param {*} immediate true 表防抖前执行，false 表防抖后执行
 * @returns 
 */
export function debounce(func, wait, immediate) {
    var timeout
    return function () {
        var context = this
        var args = arguments

        if (timeout) clearTimeout(timeout)

        if (immediate) {
            var callNow = !timeout
            timeout = setTimeout(function () {
                timeout = null
            }, wait * 1000)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait * 1000)
        }
    }
}

/**
 * @throttle 函数节流
 * @param {*} func 函数
 * @param {*} wait 延迟执行秒数
 * @param {*} immediate true 表节流前执行，false 表节流后执行
 * @returns 
 */
export function throttle(func, wait, immediate) {
    if (immediate) {
        var previous = 0
    } else {
        var timeout
    }
    return function () {
        var context = this
        var args = arguments

        if (immediate) {
            var now = Date.now()
            if (now - previous > wait * 1000) {
                func.apply(context, args)
                previous = now
            }
        } else {
            if (!timeout) {
                timeout = setTimeout(function () {
                    timeout = null
                    func.apply(context, args)
                }, wait * 1000)
            }
        }
    }
}

// 浅拷贝
export function clone(target) {
    if (typeof target === 'object' && target != null) {
        var result = target.constructor === Array ? [] : {}
        for (var key in target) {
            if (target.hasOwnProperty(key)) result[key] = target[key]
        }
        return result
    } else {
        return target
    }
}

// 深拷贝
export function deepClone(target) {
    if (typeof target === 'object' && target != null) {
        var result = target.constructor === Array ? [] : {}
        for (var key in target) {
            if (target.hasOwnProperty(key)) result[key] = deepClone(target[key])
        }
        return result
    } else {
        return target
    }
}

// 给没有 matches 方法的 Element 对象 添加 matches 方法 检查元素是否与选择器匹配
export function matches() {
    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) { }
                return i > -1;
            };
    }
}

// 事件绑定 如果有 selector 就是 给 selector 指定事件委托   ie capturing 捕获设置无效
export function add_EventListener(element, type, callback, selector, capturing) {
    if (typeof element === 'string') element = document.querySelector(element)
    capturing = capturing || false
    if (!selector) {
        if (element.addEventListener) {
            element.addEventListener(type, callback, capturing)
        } else {
            element.attachEvent('on' + type, function (event) {
                callback.call(element, event)
            })
        }
    } else {
        if (element.addEventListener) {
            element.addEventListener(type, function (event) {
                var target = event.target
                if (target.matches(selector)) callback.call(target, event)
            }, capturing)
        } else {
            matches()
            element.attachEvent('on' + type, function (event) {
                var target = event.srcElement
                if (target.matches(selector)) callback.call(target, event)
            })
        }
    }
}

// ES5 事件总线 未使用 ...展开运算符 data 最好用一个对象包裹传递 自己创建版
export function eventNewBus() {
    this.callbacks = {}

    this.on = function (key, func) {
        this.callbacks[key] ? this.callbacks[key].push(func) : this.callbacks[key] = [func]
    }
    this.off = function (key) {
        key ? delete this.callbacks[key] : this.callbacks = {}
    }
    this.emit = function (key, data) {
        if (this.callbacks[key] && this.callbacks[key].length > 0) {
            for (var i = 0; i < this.callbacks[key].length; i++) {
                this.callbacks[key][i](data)
            }
        }
    }
}

// ES5 事件总线 未使用 ...展开运算符 data 最好用一个对象包裹传递 内置版 使用闭包实现 外部只能使用 暴露方法操作内部对象
export var eventBus = (function () {
    var callbacks = {}
    return {
        on: function (key, func) {
            callbacks[key] ? callbacks[key].push(func) : callbacks[key] = [func]
        },
        off: function (key) {
            key ? delete callbacks[key] : callbacks = {}
        },
        emit: function (key, data) {
            if (callbacks[key] && callbacks[key].length > 0) {
                for (var i = 0; i < callbacks[key].length; i++) {
                    callbacks[key][i](data)
                }
            }
        },
        read: function () {
            return callbacks
        }
    }
})()

// uuid 
export var uuid = {
    // 生成当前时间戳  随机输出指定的进制
    time: function (progressiveSystem) {
        return (Math.random() * Date.now()).toString(progressiveSystem).replace('.', '')
    },
    // 生成随机数， 随机输出指定的长度  6位起步 
    number: function (length) {
        return Math.round(Math.random() * Math.pow(10, length))
    },
    // 对字符串集合随机排列，随机输出指定的长度  4位起步  推荐
    string: function (length) {
        var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var result = ''
        for (var i = 0; i < length; i++) {
            result += str[Math.floor(Math.random() * (str.length))]
        }
        return result
    },
    // 对字符串集合随机排列，随机输出指定的长度  4位起步 
    symbols: function (length) {
        var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@$!%*#_~?&^'
        var result = ''
        for (var i = 0; i < length; i++) {
            result += str[Math.floor(Math.random() * (str.length))]
        }
        return result
    },
    // 对自定义字符串集合随机排列，随机输出指定的长度 
    custom: function (str, length) {
        var result = ''
        for (var i = 0; i < length; i++) {
            result += str[Math.floor(Math.random() * (str.length))]
        }
        return result
    }
}

// ES5 消息订阅与发布 未使用 ...展开运算符 data 使用 for...in 最好用一个对象包裹传递 自己创建版
export function newPubSub() {
    this.callbacks = {}
    this.subscribe = function (channel, func) {
        var id = uuid.string(6)
        this.callbacks[channel] ? this.callbacks[channel][id] = func : this.callbacks[channel] = {}, this.callbacks[channel][id] = func // 兼容IE
        return id
    }
    this.publish = function (channel, data) {
        if (this.callbacks[channel]) {
            for (var key in this.callbacks[channel]) {
                this.callbacks[channel][key](data)
            }
        }
    }
    this.unsubscribe = function (key) {
        if (key) {
            if (typeof key === 'string') {
                if (key in this.callbacks) {
                    delete this.callbacks[key]
                } else {
                    for (var k in this.callbacks) {
                        for (var k2 in this.callbacks[k]) {
                            if (k2 === key) delete this.callbacks[k][k2]
                            break
                        }
                    }
                }

            }
        } else {
            this.callbacks = {}
        }
    }
}

// ES5 消息订阅与发布 未使用 ...展开运算符 data 使用 for...in 最好用一个对象包裹传递 内置版 使用闭包实现 外部只能使用 暴露方法操作内部对象
export var PubSub = (function () {
    var callbacks = {}
    return {
        subscribe: function (channel, func) {
            var id = uuid.string(6)
            callbacks[channel] ? callbacks[channel][id] = func : callbacks[channel] = {}, callbacks[channel][id] = func // 兼容IE
            return id
        },
        publish: function (channel, data) {
            if (callbacks[channel]) {
                for (var key in callbacks[channel]) {
                    callbacks[channel][key](data)
                }
            }
        },
        unsubscribe: function (key) {
            if (key) {
                if (typeof key === 'string') {
                    if (key in callbacks) {
                        delete callbacks[key]
                    } else {
                        for (var k in callbacks) {
                            for (var k2 in callbacks[k]) {
                                if (k2 === key) delete callbacks[k][k2]
                                break
                            }
                        }
                    }

                }
            } else {
                callbacks = {}
            }
        },
        read: function () {
            return callbacks
        }
    }
})()

export function sleep(func, seconds) {
    setTimeout(func, seconds * 1000)
}

sleep.sync = function (seconds) {
    var start = new Date().getTime()
    while (new Date().getTime() - start < seconds * 1000) { }
}

sleep.promise = function (seconds) {
    return new Promise(function (resolve, reject) {
        setInterval(function () {
            resolve()
        }, seconds * 1000);
    })
}

export var version = '1.7.0'