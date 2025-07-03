function MyPromise(fn) {
    var state = 'pending';
    var value;
    var handlers = [];

    function resolve(result) {
        if (state !== 'pending') return;
        state = 'fulfilled';
        value = result;
        console.log('执行次数==.',JSON.stringify(handlers))
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
        console.log(state)
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
    setTimeout(() => {
        console.log('promise构造函数');
        resolve();
    }, 3000)

}).then((value) => {
    console.log('then1')
}).then((value) => {
    console.log('then2')
}).then((value)=>{
    console.log('then3')
});