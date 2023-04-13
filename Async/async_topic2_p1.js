async function async1() {
    await new Promise((resolve, reject) => {
        resolve();
    });
    console.log('A')
}

async1();

new Promise((resolve) => {
    console.log('B');
    resolve()
}).then(() => {
    console.log('C')
}).then(() => {
    console.log('D')
})
// 输出:
// B
// A
// C
// D