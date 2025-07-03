// 我的看法,节流:就是在指定时间段只生效一次.
// 关键点:
// 需要有个锁.
// 高阶函数,函数柯里化(延迟执行),并未满足函数柯里化条件.
// 闭包.
const jl = (fn,time)=>{
    let lock = false;
    return (...args)=>{
       if(!lock){
          lock = true;
          fn(...args);
          let timer= setTimeout(()=>{
              clearTimeout(timer);
              lock = false;
          },time)
       }
    }
}
const csjl = jl((a)=>{
   console.log('节流函数',a);
},600);
csjl('传递参数');
setTimeout(()=>{
    csjl('传递参数');
},700)
