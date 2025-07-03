// 防抖,在指定时间内触发,只有最后一次会被触发.
// 关键点:
// 定时器的清理.
const fd = (fn,time)=>{
    let timer;
    return (...args)=>{
        if(timer){
            clearTimeout(timer);
        }
         timer = setTimeout(()=>{
            fn(...args);
        },time);
    }
}
const cefd = fd((...args)=>{
    console.log('函数防抖',...args)
},300);
cefd(1);
cefd(2);
cefd(3);
