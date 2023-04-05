function WindstormPromise(callBack) {
    // 默认等待.
    let states = 'pending';
    let value = undefined;
    let handles = [];

    // 静态方法.
    const resolve = (val) => {
        // TODO 遗漏一个知识点,Promise的状态只可以修改一次.
        if (val === 'pending') return;
        value = val;
        states = 'fulfilled';
        // 执行所有的成功函数(最多其实就一个,就是当前中的下一个).
        handles.map((v) => handler(v));
    }

    // then函数执行的可能结果.
    // 1.全部成功,一次执行完.
    // 2.有成功,有失败,执行到失败之后的函数触发失败回调(若是有的话),.
    // 静态方法.
    const reject = (val) => {
        if (val === 'pending') return;
        value = val;
        states = 'reject'
        handles.map((v) => handler(v));
    }

    const handler = (item) => {
        // TODO 如何知道执行的是第几次呐?
        // TODO 如何只执行下一次的回调.
        if (states === 'pending') {
            handles.push(item)
            return;
        }

        if (states === 'fulfilled') {
            item.onResolve(value);
            return;
        }

        if (states === 'reject') {
            item.onRejected(value);
        }
    }

    callBack(resolve, reject);

    // 实例方法.
    // TODO 如何创建then方法.
    // TODO then可以接收两个参数,onFulfilled,onReject.
    /*  const then = (other) => {
          other(value)
          // TODO 如何返回一个新的Promise对象.
          return this;
      }*/
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
            // TODO 上一个Promise如何根据自身状态,操控下一个Promise的状态.
            /* handles.push({
                 onResolve: () => {
                     // reject();
                     // 等待onResolve结束后在调用reject
                     try {
                         resolve()
                     } catch (e) {
                         reject()
                     }
                     onResolve();
                 },
                 onRejected: () => {
                     try {
                         resolve()
                     } catch (e) {
                         reject()
                     }
                     onRejected()
                 },
             });*/
            handler({
                onResolve: (v) => {
                    try {
                        resolve(onResolve(v))
                    } catch (e) {
                        reject(onRejected(v));
                    }
                },
                onRejected: (v) => {
                    try {
                        resolve(onRejected(v));
                    } catch (e) {
                        reject(onRejected(v));
                    }
                }
            })
        })
    }
}

// 运行测试.
new WindstormPromise((resolve, reject) => {
    setTimeout(() => {
        console.log('构造函数')
        resolve(1)
    }, 3000)
}).then((val) => {
    console.log('then1', val)
    return val;
}).then((val) => {
    console.log('then2', val)
})


