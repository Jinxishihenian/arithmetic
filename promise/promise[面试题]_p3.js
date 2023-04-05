// 1.1 题目一.
/*const promise1 = new Promise(
    ((resolve, reject) => {
        console.log('promise1');
    })
)
console.log('1', promise1);
// wss: 1 {Promise padding undefined}
// wss: promise1
// 错误,首先执行Promise构造函数内的代码.
*/

// 1.2题目二.
/*const promise = new Promise((resolve, reject) => {
    console.log(1)
    resolve('success')
    console.log(2)
})

promise.then(() => {
    console.log(3)
})
console.log(4)
// wss: 1
// wss: 2
// wss: 4
// wss: 3
// 正确.
*/

// 1.3 题目三.
/*
const promise = new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
});

promise.then(() => {
    console.log(3);
})

console.log(4);
// wss: 1
// wss: 2
// wss: 4
// 正确.*/

// 1.4题目四.
/*const promise1 = new Promise((resolve, reject) => {
    console.log('promise1');
    resolve('resolve1');
})

const promise2 = promise1.then(res => {
    console.log(res);
})
console.log('1', promise1)
console.log('2', promise2)
// wss: promise1
// wss: {Promise fulfilled}
// wss: {Promise pending}
// wss: res
// 错误，逻辑正确,但是忘记了res是形参.*/

// 1.5题目五.
/*const fn = () => (new Promise((resolve, reject) => {
    console.log('1')
    resolve('success');
}))

fn().then(res => {
    console.log(res)
});

console.log('start')

// wss: 1
// wss: start
// wss: success
// wss: 正确
*/

// 1.6 题目六
/*const fn = () =>
    new Promise((resolve, reject) => {
        console.log(1);
        resolve('success')
    })

console.log('start')

fn().then(res => {
    console.log(res)
})*/
// wss:start
// wss:1
// wss:success
// 正确.

// 2.1 题目一
/*console.log('start')

// 宏任务2.
setTimeout(() => {
    console.log('time')
})

// 微任务.
Promise.resolve().then(() => {
    console.log('resolve')
})

// 宏任务1
console.log('end');

// wss: start
// wss: end
// wss: resolve
// 宏任务1结束.
// wss: time
// 宏任务2结束.
// 正确*/
function miniPromise(fn) {
    let handle = [];
    this.then = (thenfn) => {
        return new miniPromise(() => {
            handle.push(1);
            console.log('handle的长度');
            console.log(handle)
            thenfn()
        });
    }
    fn();
}

new miniPromise(() => {
    console.log('0');
}).then(() => {
    console.log('1')
}).then(() => {
    console.log('2')
}).then(() => {
    console.log('3')
})



// 1.then有什么功能?
// - 返回一个新Promise对象.
// - 根据上一个Promise对象的状态来决定,本次要执行的操作(Promise成功/失败/等待).
// - 接收上一个Promise传递的值.

/*
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('延时执行')
        reject()
        // resolve()
    }, 3000)
}).then(
    () => {
        console.log(1)
    },
    /!* () => {
         console.log(2)
     }*!/
).then(
    () => {
    },
    () => {
        console.log(3)
    }
).then(
    () => {
        console.log(4)
    },
    () => {
        console.log(5)
    }
);*/