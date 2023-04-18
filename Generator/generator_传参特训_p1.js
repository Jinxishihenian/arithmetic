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
function* generator() {
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
console.log(g.next(3))
