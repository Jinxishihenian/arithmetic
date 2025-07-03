let arr = [4, 1, 3, 3, 2, '2'];

// 1.set 方式去重
let arr2  = [...new Set(arr)];
// console.log(arr2)

// 2.indexOf + filter 用法
// console.log(arr.indexOf(3))
let arr3 = arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
});
// console.log(arr3);

// 3.Map 用法
// let map = new Map();
// arr.forEach((value, index, self) => {
//     map.set(value, value);
// });
//
// // console.log(map);
//
// map.forEach((value, index, self) => {
//     console.log(value);
// });


let info = Array.from(new Map(arr.map((value,index,array)=>[value,value])).values());
// let result2 = Array.from(new Map(arr2.map((value) => [value, value])).values());
// console.log(info);

console.log(new Map([['name1',1],['name2',2],['name3',3]]))
console.log(Array.from(new Map([['name1',1],['name2',2],['name3',3],['name3',3]]).values()));