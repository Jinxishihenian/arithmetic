const PENDING = 'pending'; // 悬而未决的
const RESOLVED = 'resolved'; // 断然的
const REJECTED = 'rejected'; // 拒绝的

function MyPromise(fn) {
    const that = this
    that.state = PENDING
    that.value = null
    that.resolvedCallbacks = []
    that.rejectedCallbacks = []
    // 待完善 resolve 和 reject 函数
    // 待完善执行 fn 函数
    function resolve(value) {
        if (that.state === PENDING) {
            that.state = RESOLVED
            that.value = value
            that.resolvedCallbacks.map(cb => cb(that.value))
        }
    }

    function reject(value) {
        if (that.state === PENDING) {
            that.state = REJECTED
            that.value = value
            that.rejectedCallbacks.map(cb => cb(that.value))
        }
    }

    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }

}


// 复杂的then函数
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function'? onRejected: r => {throw r}

    if (that.state === PENDING) {
        that.resolvedCallbacks.push(onFulfilled)
        that.rejectedCallbacks.push(onRejected)
    }
    if (that.state === RESOLVED) {
        onFulfilled(that.value)
    }
    if (that.state === REJECTED) {
        onRejected(that.value)
    }
}

// 测试
new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 2000)
}).then(value => {
    console.log(value)
})

