// 加载 css
export function css(path) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = path;
    document.getElementsByTagName('head')[0].appendChild(link);
}

// 加载 js
export function js(path, location, async, type) {
    console.log(path, location, async, type);
    var script = document.createElement('script');
    script.type = type || 'text/javascript';
    script.async = !!async;
    script.src = path;
    document.getElementsByTagName(location || 'head')[0].appendChild(script);
}

// 加载 网页图标
export function icon(path, type) {
    var linkList = document.getElementsByTagName('link');
    if (linkList.length) {
        for (var i = 0; i < linkList.length; i++) {
            if (linkList[i].rel === 'shortcut icon' || linkList[i].rel === 'icon') {
                linkList[i].remove();
                break;
            }
        }
    }
    var link = document.createElement('link');
    link.rel = 'shortcut icon';
    link.type = type || 'image/x-icon';
    link.href = path;
    document.getElementsByTagName('head')[0].appendChild(link);
}

export var version = '1.0.0'