// fill(value)
// fill(value,start)
// fill(value,start,end)
// start 从start开始索引开始的元素.
// 基于零的索引,从此处开始填充
// 修改原数组.
const array1 = [1,2,3,4,5];
array1.fill(0,1,5);
console.log(array1)