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
分析:
1.代码首先进入一个宏任务整个script脚本.
2.执行同步代码,将Promise构造函数的参数callback(),弹入到调用栈中,发现是一个定时任务,将该定时器的回调函数放置到WebAPI提供的线程.
3.then内部的回调此时并不会触发,只是将then内部的回调方法缓存下来,因为promise还没有状态,所以缓存的回调会等到Promise有状态时在进行对应的回调,
  微任务队列没有执行语句,第一次事件循环结束.
4.第二次事件循环开始执行,从宏任务中开始执行WebAPI内的回调,输出'构造函数',修改Promise的状态为fulfilled,开始将then函数推入微任务.
5.微任务进入调用栈,输出'then0';遇到定时器,将定时器内部回调放置WepAPI中,继续执行微任务,输出'then2',微任务执行结束,第二次事件循环结束.
6.第三次事件循环开始,发现只有宏任务队列中有定时器任务回调,执行回调'then1',第三次事件循环结束.
*/
// 构造函数
// then0
// then2
// then1