// 回调函数首次运行时,没有'上一次计算的返回值'.如果提供了初始值,可以使用该值替代.否则,将使用索引0出的数组元素作为初始值,并从下一个元素(索引1而不是索引0)开始迭代
const arr1 =[1,2,3,4];
const initialValue = 0;

// 包含初始值(不包含初始值的,比包含初始值的少一轮因为,未包含的从索引1开始,且accumulator为 索引为0的元素).
const sumWithInitial = arr1.reduce((accumulator,currentValue)=>{
    console.log('前一个元素计算后的返回值:',accumulator);
    console.log('本轮元素:',currentValue);
    return accumulator + currentValue;
},initialValue);
console.log(sumWithInitial);