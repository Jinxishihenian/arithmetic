/*
demo1
function* generator() {
    yield 1
    yield 2
    yield 3
}

const g = generator();
console.log(g.next());// {value:1,done:false}
console.log(g.next());// {value:2,done:false}
console.log(g.next());// {value:3,done:false}
console.log(g.next());// {value:undefined,done:true}
*/

/*
demo2
function* generator() {
    yield 1
    yield 2
    yield 3
    return 4
}

const g = generator();
console.log(g.next());// {value:1,done:false}
console.log(g.next());// {value:2,done:false}
console.log(g.next());// {value:3,done:false}
console.log(g.next());// {value:4,done:true}
*/

/*
function fn(num) {
    console.log(num)
    return num;
}

function* generator() {
    yield fn(1)
    yield fn(2)
    return 3
}

const g = generator();
console.log(g.next())
console.log(g.next())
console.log(g.next())
*/

/*
function fn(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(num);
        }, 1000)
    })
}

function* gen() {
    yield fn(1);
    yield fn(2);
    return 3
}

const g = gen();
const next1 = g.next();

next1.value.then((res1) => {
    console.log(next1)
    console.log(res1)
    const next2 = g.next();
    next2.value.then(res2 => {
        console.log(next2);
        console.log(res2);
        console.log(g.next());
    });
})*/

function* gen() {
    const num1 = yield 1;
    console.log(num1)
    const num2 = yield 2;
    console.log(num2)
    return 3;
}

let g = gen();
console.log(g.next());
console.log(g.next(1111))
console.log(g.next(2222))

/*
function fn(nums) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(nums * 2);
        }, 100)
    })
}

function* gen() {
    const num1 = yield fn(1);
    const num2 = yield fn(num1);
    const num3 = yield fn(num2);
    return num3;
}

const g = gen();
const next1 = g.next();
next1.value.then((res1) => {
    console.log(res1);
    console.log(next1);
    const next2 = g.next(res1);
    next2.value.then((res2) => {
        console.log(res2)
        console.log(next2)
        const next3 = g.next(res2);
        next3.value.then((res3) => {
            console.log(res3)
            console.log(next3)
            console.log(g.next(res3))
        })
    })
})*/

/*function* gen() {
    const num1 = yield 1;
    console.log(num1);
    return 3
}

const g = gen();
console.log(g.next('11'))
console.log(g.next('22'))*/

/*
function fn(nums) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(nums * 2)
        }, 1000);
    })
}

function* gen() {
    const num1 = yield fn(1);
    const num2 = yield fn(num1);
    const num3 = yield fn(num2);
    return num3;
}

function generatorHOC(generator) {
    return function () {
        return new Promise((resolve, reject) => {
            const g = generator();
            const next1 = g.next();
            // resolve();
            next1.value.then((res1) => {
                const next2 = g.next(res1);
                next2.value.then((res2) => {
                    const next3 = g.next(res2);
                    next3.value.then((res3) => {
                        resolve(g.next(res3).value);
                    })
                })
            })
        })
    }
}

const asyncFn = generatorHOC(gen);

console.log(asyncFn())
*/























