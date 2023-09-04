// js节流函数,在指定间隔时间内执行一次.
const throttle = (callBack, time) => {
    let lock = true;
    return (...params) => {
        if (lock) {
            lock = false;
            setTimeout(() => {
                callBack(...params);
                lock = true;
            }, time);
        }
    }
}
const testThrottle = throttle((params) => {
    console.log('节流函数传递的参数');
    console.log(params);
}, 2000);
testThrottle('节流1');
testThrottle('节流2');
testThrottle('节流3');

// js防抖函数,在规定范围时间内只执行最后一次.
const debunce = (callBack, time) => {
    let timer = null;
    return (...arr) => {
        if (timer) clearTimeout(timer)
        // clearTimeout()
        timer = setTimeout(() => {
            callBack(...arr);
        }, time);
    }
}
const testDebunce = debunce((params) => {
    console.log('防抖函数传递参数');
    console.log(params)
}, 2000);

testDebunce('防抖一');
testDebunce('防抖二');
testDebunce('防抖三');