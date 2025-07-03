async function testA() {
    return 1
}

/*JS-Promise.resolve(1).then(() => {
    console.log(1)
});*/

testA().then(() => {
    console.log(1)
});

Promise.resolve()
    .then(() => {
        console.log(2)
    })
    .then(() => {
        console.log(3)
    })
// 1
// 2
// 3