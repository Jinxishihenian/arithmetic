const months =['一','二','三','四'];
// 第一参数 start,第二个参数 deleteCount;
months.splice(0,1,'零');
console.log(months);

const months2 =['一','二','三','四'];
// splice2;
const item = months2.splice(1);
console.log(months2);
console.log(item)
const months3 =['一','二','三','四'];
const months4 =['一','二','三','四'];
const months5 =['一','二','三','四'];
const months6 =['一','二','三','四'];

// 切割数组.
// 删除从索引start开始的所有元素
// splice(start);
// 删除指定元素.
// splice(start,deleteCount)
// 在指定位置,删除并添加数组.
// 当deleteCount = 0,则为在指定位置插入数组.
// splice(start,deleteCount,item,...)
console.log(months3.slice(1))
console.log(months3)