// 正确.
const promise1 = new Promise((resolve, reject) => {
    // resolve(1);
    setTimeout(() => {
        resolve(1000);
    }, 1000);
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2000);
    }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3000);
    }, 3000);
});
// 异常.
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(200);
    }, 2000);
});
// 等待所有执行完毕,才会输出,当有一个错误时直接输出.
// Promise.all([promise1, promise2, promise3]).then(result => {
//     console.log('all');
//     console.log(result);
// });
// 等待任意一个成功的结果,当全部失败才为失败.
// Promise.any([promise4, promise1, promise3]).then(result => {
//     console.log(result);
// });
// 看谁最快,不看结果.
// Promise.race([promise4, promise3]).then(result => {
//     console.log('race');
//     console.log(result);
// });
// 会等待所有Promise执行.
Promise.allSettled([promise3, promise4, promise1]).then(result => {
    console.log('allSettled');
    console.log(result);
});