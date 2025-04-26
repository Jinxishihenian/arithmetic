// .then 做了什么?
// 它负责'接住你return的值',并封装成Promise以便继续链式处理,它还会捕获错误,决定是否进入一下一个.then还是.catch.


// .then实现 伪代码.
Promise.prototype.then = function(onfulfilled){
    return new Promise((resolve,reject)=>{
        try{
            const result = onfulfilled(this.value);
            resolve(result);
        }catch(err){
            reject(err);
        }
    });
}

let p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('订单完成');
    },3000)
});

p.then((msg)=>{
    console.log(msg)
    // 1.普通值->自动变成 Promise.resolve(值)
    // 2.Promise->等待它完成,继续传递下去.
    // 3.throw Error->自动变成Promise.reject(错误),被下一个.catch捕获.
    return msg;
},(err)=>{
    console.log(err);
})

