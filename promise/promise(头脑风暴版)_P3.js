function WindstormPromise(callBack) {
    // 默认等待.
    let states = 'pending';
    let value = undefined;
    // 我感觉这更类似一个发布订阅模式.
    handle = [];

    // 静态方法.
    const resolve = (val) => {
        // TODO 遗漏一个知识点,Promise的状态只可以修改一次.
        value = val;
        states = 'fulfilled';
        // 执行所有的成功函数.
        handle.map((v) => header(v));
        // handle.push()
    }

    // 静态方法.
    const reject = (val) => {
        value = val;
        states = 'reject'
        handle.map((v) => header(v));
    }

    const header = (item) => {
        if (states === 'fulfilled') {
            item.resolve();
            return;
        }
        if (states === 'reject') {
            item.reject();
        }
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
        // handle.push(onResolve);
        return new WindstormPromise((resolve, reject) => {
            // 在这里会做些什么?
            // 1.根据上一个Promise的状态来进行操作.
            // 操作什么?将成功或者失败的状态推入到handle中去.
            // 在什么时机推入进去?
            // 1.直接推入进去.根据之后完成的状态筛选出合适的回调. 2.等待状态确定推入合适的回调(时机和位置无法协调).
            // 2.如何操控新返回Promise对象的状态?
            handle.push({
                onResolve: () => {
                    // reject();
                    // 等待onResolve结束后在调用reject
                    onResolve();
                },
                onRejected: () => {
                    reject()
                    onRejected()
                },
            });
        })
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