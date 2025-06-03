const arr1 = [1,2,3,4,5,6];
// 修改原数组,从头部删除元素并删除.
const item  = arr1.shift();
console.log(arr1)
console.log(item)

// 修改原数组,从头添加,并返回数组长度.
const arr2 = [1,2,3,4,5,6];
arr2.unshift(0);
console.log(arr2);