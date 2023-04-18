/*
function* generator() {
    yield 1;
    yield 2;
    return 3;
}

const g = generator();
console.log(g.next())
console.log(g.next())
console.log(g.next())*/
// 训练1: 传参
/*function* generator() {
    const value1 = yield 0;
    const value2 = yield value1;
    const value3 = yield value2;
    const value4 = yield value3;
    return value4;
}

const g = generator()
console.log(g.next())
console.log(g.next(1))
console.log(g.next(2))
console.log(g.next(3))*/

function* generator() {
    const value1 = yield 1;
    console.log('第一次1', value1)
    const value2 = yield 2;
    console.log('第二次2', value2)
    const value3 = yield 3;
    console.log('第三次3', value3)
}

const g = generator();
// g.next(1);
console.log(g.next(1))
console.log(g.next(2))
console.log(g.next(3))
console.log(g.next(4))
// console.log(g.next(1))
/*const time = setInterval(() => {
    const { value, done } = g.next(1);
    if (done) {
        clearInterval(time)
    }
}, 1000);*/

