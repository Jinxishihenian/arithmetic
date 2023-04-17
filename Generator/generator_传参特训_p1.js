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
function* generator() {
    const value1 = yield 1996;
    console.log(value1)
}

const g = generator()
console.log(g.next(1))
console.log(g.next(2))