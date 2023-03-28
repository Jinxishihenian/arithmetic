/*
初次尝试.
new Promise((resolve, reject) => {
    // 修改promise的状态,fulfilled.
    resolve('resolve');
})

new Promise((resolve, reject) => {
    // 修改promise的状态,rejected
    reject('reject')
})*/

// 具体案例.
/*
function getImage() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                const data = { value: '测试赋值' }
                resolve(data)
            }, 3000)
        } catch (e) {
            resolve(e);
        }
    });
}

getImage()
    .then(data => console.log(data))
    .catch((e) => {
        console.log(e)
    })
    .finally(() =>
        console.log('All done!')
    );*/

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

// race/all例子 .
function runAsync1() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log('异步任务1执行完成')
            resolve('异步任务1结果')
        }, 3000)
    })
    return promise;
}

function runAsync2() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log('异步任务2执行完成')
            resolve('异步任务2结果')
        }, 2000)
    })
    return promise;
}

function runAsync3() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            console.log('异步任务3执行完成')
            resolve('异步任务3结果')
        }, 1000)
    })
    return promise;
}

Promise.race([runAsync1(), runAsync2(), runAsync3()]).then((result) => {
    console.log(result);
})

/*Promise.all([runAsync1(), runAsync2(), runAsync3()]).then((result) => {
    console.log(result);
})*/


