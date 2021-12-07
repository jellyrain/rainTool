import * as calculate from './calculate'
import * as oui from './oui'
import * as method from './method'
import * as loading from './loading'
import * as array from './array'
import * as object from './object'
import * as string from './string'
import * as listener from './listener'

function rainTool() {
    console.log({
        version: rainTool.version,
        calculate: calculate.version,
        oui: oui.version,
        method: method.version,
        loading: loading.version,
        array: array.version,
        object: object.version,
        string: string.version,
        listener: listener.version
    });
}

rainTool.version = '1.2.0'
// rainTool.calculate = calculate
// rainTool.oui = oui
// rainTool.method = method
// rainTool.loading = loading
// rainTool.array = array
// rainTool.object = object
// rainTool.string = string
// rainTool.listener = listener

for (var key in calculate) {
    rainTool[key] = calculate[key]
}
for (var key in oui) {
    rainTool[key] = oui[key]
}
for (var key in method) {
    rainTool[key] = method[key]
}
for (var key in loading) {
    rainTool[key] = loading[key]
}
for (var key in array) {
    rainTool[key] = array[key]
}
for (var key in object) {
    rainTool[key] = object[key]
}
for (var key in string) {
    rainTool[key] = string[key]
}
for (var key in listener) {
    rainTool[key] = listener[key]
}

if (window.console && window.console.log) {
    console.log([
        "      __         __  __                      __        ",
        "     |__|.-----.|  ||  |.--.--..----..---.-.|__|.-----.",
        "     |  ||  -__||  ||  ||  |  ||   _||  _  ||  ||     |",
        "     |  ||_____||__||__||___  ||__|  |___._||__||__|__|",
        "    |___|               |_____|                        "
    ].join('\n'));
};

export default rainTool