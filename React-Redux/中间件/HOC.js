// 在函数式编程中,我们常用函数包装另一个函数,增强其功能
// 比如:
const withLogging = (fn)=>{
    return function(...args){
        console.log('调用前',args);
        const result = fn(...args);
        console.log('调用后',result);
        return result;
    }
}
const add = (a,b)=>a+b;
// 增强.
const loggeAdd = withLogging(add);
loggeAdd(1,2);