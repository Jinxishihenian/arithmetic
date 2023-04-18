/*
demo1
async function testAsync0() {
    return "hello async"
}

async function testAsync1() {

}

console.log(testAsync0())
console.log(testAsync1())
console.log(Promise.resolve("hello async"))
console.log(Promise.resolve())*/

function testAsync() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (true) {
                console.log('请求中...')
                resolve('resolve return');
            } else {
                reject('reject return');
            }
        }, 2000)
    })
}

let result = await testAsync();
let result1 = await "testAsync后执行";
console.log(result);
console.log(result1)