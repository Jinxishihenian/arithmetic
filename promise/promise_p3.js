// 初次尝试.
/*
new Promise((resolve, reject) => {
    // 修改promise的状态,fulfilled.
    resolve('resolve');
})

new Promise((resolve, reject) => {
    // 修改promise的状态,rejected
    reject('reject')
})*/

// 链式调用失败场景.
/*
Promise.reject('异常').then((value) => {
    console.log('resolve');
    console.log(value)
    console.log(nodata)
}, (reason, data) => {
    console.log('reject')
    console.log(reason)
    console.log(data)
}).catch((e) => {
    console.log('catch')
    console.log(e)
})
*/

// race/all/allSettled/any例子.
/*
function runAsync1() {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('异步任务1执行完成')
            reject('异步任务1结果')
        }, 3000)
    })
    return promise;
}

function runAsync2() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步任务2执行完成')
            reject('异步任务2结果')
            // reject()
        }, 2000)
    })
    return promise;
}

function runAsync3() {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            // console.log('异步任务3执行完成')
            // resolve('异步任务3结果')
            reject();
        }, 1000)
    })
    return promise;
}
*/

/*
Promise.race([runAsync1(), runAsync2(), runAsync3()]).then((result) => {
    console.log(result);
})

Promise.all([runAsync1(), runAsync2(), runAsync3()]).then((result) => {
    console.log(result);
})

Promise.allSettled([runAsync1(), runAsync2(), runAsync3()]).then((res) => {
    console.log('res')
    console.log(res)
})
Promise.any([runAsync1(), runAsync2(), runAsync3()]).then((res) => {
    console.log('res')
    console.log(res)
});

 */

// promise状态只可以改变一次.
/*
new Promise((resolve, reject) => {
    console.log('只是时间问题');
    resolve('fulfilled');
    reject('reject');
}).then((value) => {
    console.log(value)
}, (value) => {
    console.log(value)
}).catch((e) => {
    console.log('异常捕获..')
})

// 输出fulfilled.
*/

new Promise((resolve) => {
    setTimeout(() => {
        console.log('构造函数');
        resolve()
    }, 3000)
}).then(() => {
    console.log('then0')
    setTimeout(() => {
        console.log('then1')
    }, 3000)
}).then(() => {
    console.log('then2')
})

/*
1.代码首先进入一个宏任务整个script脚本.
2.执行同步代码,将Promise构造函数的参数callback(),弹入到调用栈中,发现是一个定时任务,将该定时器的回调函数放置到WebAPI提供的线程.
3.then中的回调进入微任务队列.
4.一次事件循环结束.
5.二次事件循环开始.
6.从宏任务中开始.
3.此时调用栈为空.WEBapi包含一个定时任务的回调,宏任务,微任务队列分别为空,第一轮事件循环结束,进入等待状态.
4.WEBAPI等待3秒后将定时任务的回调函数推入到宏任务队列中,由于调用栈为空宏任务立即执行,输出'构造函数',并不清楚该轮事件循环是否结束.
*/
