import * as calculate from './calculate'
import * as oui from './oui'
import * as method from './method'
import * as loading from './loading'
import * as array from './array'
import * as object from './object'
import * as string from './string'
import * as listener from './listener'
import * as file from './file'

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
        listener: listener.version,
        file: file.version
    });
}

rainTool.version = '1.4.0'
rainTool.calculate = calculate
rainTool.oui = oui
rainTool.method = method
rainTool.loading = loading
rainTool.array = array
rainTool.object = object
rainTool.string = string
rainTool.listener = listener
rainTool.file = file

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