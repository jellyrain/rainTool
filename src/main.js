import * as calculate from './calculate'
import * as oui from './oui'
import * as method from './method'
import * as loading from './loading'
import * as array from './array'
import * as object from './object'
import * as string from './string'

function jTool() {
    console.log({
        version: jTool.version,
        calculate: calculate.version,
        oui: oui.version,
        method: method.version,
        loading: loading.version,
        array: array.version,
        object: object.version,
        string: string.version
    });
}

jTool.version = '1.2.0'
// jTool.calculate = calculate
// jTool.oui = oui
// jTool.method = method
// jTool.loading = loading
// jTool.array = array
// jTool.object = object
// jTool.string = string

for (var key in calculate) {
    jTool[key] = calculate[key]
}
for (var key in oui) {
    jTool[key] = oui[key]
}
for (var key in method) {
    jTool[key] = method[key]
}
for (var key in loading) {
    jTool[key] = loading[key]
}
for (var key in array) {
    jTool[key] = array[key]
}
for (var key in object) {
    jTool[key] = object[key]
}
for (var key in string) {
    jTool[key] = string[key]
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

export default jTool