// 预置函数.
// 预制函数与装饰器模式.
function after(time, fn) {
    return function () {
        if (--time === 0) {
            fn()
        }
    }
}

// 吃饭的时候,吃三次才能吃饱.
let eat = after(3, function () {
    console.log('我吃饱了');
})

eat();
eat();
eat();