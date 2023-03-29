function MyPromise(fn) {
    var state = 'pending';
    var value;
    var handlers = [];

    function resolve(result) {
        if (state !== 'pending') return;
        state = 'fulfilled';
        value = result;
        handlers.forEach(handle);
        handlers = null;
    }

    function reject(error) {
        if (state !== 'pending') return;
        state = 'rejected';
        value = error;
        handlers.forEach(handle);
        handlers = null;
    }

    function handle(handler) {
        if (state === 'pending') {
            handlers.push(handler);
        } else {
            if (state === 'fulfilled' && typeof handler.onFulfilled === 'function') {
                handler.onFulfilled(value);
            }
            if (state === 'rejected' && typeof handler.onRejected === 'function') {
                handler.onRejected(value);
            }
        }
    }

    this.then = function (onFulfilled, onRejected) {
        return new MyPromise(function (resolve, reject) {
            handle({
                onFulfilled: function (result) {
                    try {
                        if (typeof onFulfilled === 'function') {
                            resolve(onFulfilled(result));
                        } else {
                            resolve(result);
                        }
                    } catch (error) {
                        reject(error);
                    }
                },
                onRejected: function (error) {
                    try {
                        if (typeof onRejected === 'function') {
                            resolve(onRejected(error));
                        } else {
                            reject(error);
                        }
                    } catch (err) {
                        reject(err);
                    }
                }
            });
        });
    };

    fn(resolve, reject);
}

new MyPromise((resolve, reject) => {
    setTimeout(()=>{
        resolve('构造函数参数');
        console.log('测试是否可以继续运行')
    },3000)
}).then((value) => {
    console.log('===测试值==');
    console.log(value)
});