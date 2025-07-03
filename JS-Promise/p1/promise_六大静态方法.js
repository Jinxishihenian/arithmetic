// promise.all.
const promise1 = Promise.resolve();
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('你好世界');
    }, 3000);
})
const promise4 = Promise.reject(new Error('错误测试'));
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('错啦'));
    }, 2000)
})
// 当输入所有的Promise都满足时,JS-Promise.all就会满足并带一个满足值的数组.
const p = Promise.all([promise1, promise2, promise3]).then((values) => {
    // 所有为resolve的输出.
    // console.log(values);
});

// 当其中任意Promise被拒绝,JS-Promise.all会被立即拒绝,并给出第一个Promise拒绝理由.
Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    // 输出 undefined.
    // 包含reject的输出.
    // console.log(values);
}).catch((errors) => {
    // console.log(errors)
})

// promise.allSettled
const promiseSettled1 = Promise.resolve(3);
const promiseSettled2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000)
});

Promise.allSettled([promise1, promise2, promise3]).then((values) => {
    // console.log(values)
});
// 3秒后所有的结果都会输出.
Promise.allSettled([promiseSettled1, promiseSettled2]).then((values) => {
    // console.log(values)
})

// promise.any.
// Promise当任何promise履行承诺时,返回的承诺就会履行.
Promise.any([promise3, promise5]).then((values) => {
    // console.log(values)
})
// 当Promise列表所有为拒绝时Promise.any状态为拒绝.
// promise.race的状态取决于第一个Promise的状态.
Promise.race([promise3, promise5]).then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
});
// reject拒绝.
// promise.reject.

// resolve 解决.
// promise.resolve.