// 创建和管理listeners的方法.
function createEvents() {
    let handlers = [];
    return {
        push(fn) {
            handlers.push(fn);
            return function () {
                handlers = handlers.filter(handler => handler !== fn);
            }
        },
        call(arg) {
            handlers.forEach((fn) => fn && fn(arg));
        }
    }
}

function createBrowserHistory() {
    const listeners = createEvents();
    let location = {
        pathname: "/",
    };

    // 路由变化时的回调.
    const handlePop = function () {
        const currentLocation = {
            pathname: window.location.pathname
        }
        listeners.call(currentLocation);
    }

    window.addEventListener('popstate', handlePop);

    return {
        listen(listener) {
            return listeners.push(listener);
        },
        location,
    }
}



