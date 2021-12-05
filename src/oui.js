// 判断 是不是 邮箱 名称允许英文字母、数字，域名只允许英文域名
export function isEmail(str) {
    return /^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
}

// isEmail 扩展 额外允许 汉字
function emailChinese(str) {
    return /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(str);
}

// 判断 是不是 手机号
export function isPhone(str) {
    return /^1(3|4|5|6|7|8|9)\d{9}$/.test(str);
}

// isPhone 扩展 判断 是否 是固定电话
function phoneLandline(str) {
    return /(\(\d{3,4}\)|\d{3,4}-|\s)?\d{8}/.test(str);
}

// 判断 是不是 域名
export function isDomain(str) {
    return /^((http:\/\/)|(https:\/\/))?([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}(\/)/.test(str);
}

// 判断 是不是 IP
export function isIP(str) {
    return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(str);
}

// 判断 账号 是否合法 字母开头，允许 字母 数字 下划线 长度 (min ~ max) + 1 字节
export function account(str, min, max) {
    return new RegExp('^[a-zA-Z][a-zA-Z0-9_]{' + min + ',' + max + '}$').test(str);
}

// account 扩展 允许 汉字 长度 min ~ max 字节
function accountChinese(str, min, max) {
    return new RegExp('^[\u4e00-\u9fa5]{' + min + ',' + max + '}$').test(str);
}
// account 扩展 额外允许 汉字开头 汉字 长度 (min ~ max) + 1 字节
function accountAddChinese(str, min, max) {
    return new RegExp('^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9_\u4e00-\u9fa5]{' + min + ',' + max + '}$').test(str);
}

// 判断 密码 是否合法 字母开头，允许 字母 数字 长度 (min ~ max) + 1 字节
export function password(str, min, max) {
    return new RegExp('^[a-zA-Z][a-zA-Z0-9]{' + min + ',' + max + '}$').test(str);
}

// 判断 是不是 火车车次
export function isTrainTimes(str) {
    return /^[GCDZTSPKXLY1-9]\d{1,4}$/.text(str)
}

// 判断 是不是 md5格式(32位)
export function isMd5(str) {
    return /^([a-f\d]{32}|[A-F\d]{32})$/.text(str)
}

// 判断 是不是 视频(video)链接地址
export function isVideo(str) {
    return /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i.text(str)
}

// 判断 是不是 图片(image)链接地址
export function isImage(str) {
    return /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i.text(str)
}

// 判断 是不是 QQ号
export function isQQ(str) {
    return /^[1-9][0-9]{4,10}$/.text(str)
}

isEmail.chinese = emailChinese;
isPhone.landline = phoneLandline;
account.chinese = accountChinese;
account.addChinese = accountAddChinese;

export var version = '1.1.0'