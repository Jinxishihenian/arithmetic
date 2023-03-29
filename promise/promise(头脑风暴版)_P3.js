function Promise(callBack) {
    // 默认等待.
    let states = 'pending';
    let value = undefined;

    // 静态方法.
    const resolve = (val) => {
        // TODO 遗漏一个知识点,Promise的状态只可以修改一次.
        value = val;
        states = 'fulfllied';
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
}

new Promise((resolve, reject) => {
    resolve('11')
}).then((value) => {
    console.log(value)
})