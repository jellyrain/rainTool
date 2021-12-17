// 解析 单句 模板
export function regularity(template, data) {
    return template.replace(/\{\{(\w+)\}\}/g, function (findSrt, $1) {
        return data[$1]
    })
}

export var version = '1.0.0'