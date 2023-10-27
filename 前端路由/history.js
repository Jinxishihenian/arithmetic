let routerView;
var _wr = function (type) {
    var orig = history[type];
    return function () {
        // 将原本的函数修改为调用就触发.
        // 创建事件.
        var e = new Event(type);
        e.arguments = arguments;
        var rv = orig.apply(this, arguments);
        // 触发函数.
        window.dispatchEvent(e);
        return rv;
    }
}

// 重写pushstate事件.
history.pushState = _wr('pushstate');

function onLoad() {
    routerView = document.querySelector('#routeView');
    onPopState();
    // 拦截<a>标签点击事件默认行为.
    // 点击使用pushState修改URL并更新UI,从而实现点击链接更新URL和UI的效果.
    let linkLink = document.querySelectorAll('a[href]')
    linkLink.forEach((el) => el.addEventListener('click', function (e) {
        e.preventDefault();
        history.pushState(null, '', el.getAttribute('href'))
        onPopState()
    }));
}

// 页面加载完不会触发hashchange,这里主动触发一次popstate事件,处理默认pathname
window.addEventListener('DOMContentLoaded', onLoad);
// 监听pushstate方法.
window.addEventListener('pushstate', onPopState);
// 监听路由变化.
window.addEventListener('popstate', onPopState)


function onPopState() {
    switch (location.pathname) {
        case '/home':
            routerView.innerHTML = 'This is Home';
            return;
        case '/about':
            routerView.innerHTML = 'This is About';
            return;
        case '/list':
            routerView.innerHTML = 'This is List';
            return;
        default:
            routerView.innerHTML = 'Not Found';
            return;
    }
}