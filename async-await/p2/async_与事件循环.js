async function example(){
    console.log('1 开始 example');
    // 第一个await开始
    const resA = await asyncOpA();
    //(此处example 挂起,control返回调用者)
    console.log('3 恢复example,resulA', resA);

    // 第二个await开始
    const resB = await asyncOpB();
    //(此处example再次挂起,control再次返回调用者)
    console.log('5 恢复example,resulB', resB);

    return resB;
}

function asyncOpA(){
    return Promise.resolve(1);
}

function asyncOpB(){
    return Promise.resolve(2);
}

// '调用者'
console.log('调用前')

example().then(final => {
    console.log('6 完成 example,final:',final)
})

console.log('调用后')