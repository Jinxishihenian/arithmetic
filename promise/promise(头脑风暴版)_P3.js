function WindstormPromise(callBack) {
    // 默认等待.
    let states = 'pending';
    let value = undefined;
    // 我感觉这更类似一个发布订阅模式.
    let handle = [];

    // 静态方法.
    const resolve = (val) => {
        // TODO 遗漏一个知识点,Promise的状态只可以修改一次.
        value = val;
        states = 'fulfilled';
        // 执行所有的成功函数.
        handle.map((v) => v());
    }

    // 静态方法.
    const reject = (val) => {
        value = val;
        states = 'reject'
    }

    callBack(resolve, reject);

    // 实例方法.
    // TODO 如何创建then方法.
    // TODO then可以接收两个参数,onFulfilled,onReject.
    const then = (other) => {
        other(value)
        // TODO 如何返回一个新的Promise对象.
        return this;
    }
    // TODO 假设将then方法绑定到原型对象中,会面临几个问题.
    // 1.如何共享数据?
    // TODO 为什么this.then就可以了.
    this.then = (onResolve, onRejected) => {
        // 可能执行onResolve.
        // 可能执行onRejected.
        // 可能什么都不执行.
        // TODO onRejected情况如何处理?
        handle.push(onResolve);
    }
}

/*
运行测试.
new Promise((resolve, reject) => {
    resolve('11')
}).then((value) => {
    console.log(value)
})*/
// 1.then有什么功能?
// - 返回一个新Promise对象.
// - 根据上一个Promise对象的状态来决定,本次要执行的操作(Promise成功/失败/等待).
// - 接收上一个Promise传递的值.


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
    /* () => {
         console.log(2)
     }*/
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
);