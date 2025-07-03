// 函数组合
function compose(...funcs){
    return funcs.reduce((a, b) => (...args)=>a(b(...args)));
}

// 上一次的执行结果时这次执行的参数.

const f =x=>x+1;
const g =x=>x*2;
const h=x=>x-3;

// 组合.
const composed = compose(f,g,h);

console.log(composed(5));
compose(f,g,h)(5);