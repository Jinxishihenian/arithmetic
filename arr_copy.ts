// let arr1 = [1, 2, 3, 4];
// let arr2: Array<any> = [];
//
// arr2 = arr1.slice(0, arr1.length);
// console.log(arr1);
// console.log(arr2);
// let o = {a:1};
// o.b=2;
// Object.defineProperty(o,'a',{
//     enumerable:true,
//     get(): any {}
//
// });
// console.log(Object.getOwnPropertyDescriptor(o,'a'));

// js访问器属性与数据属性.
// 数据属性.
// let obj = {name:"percy"}
// console.log(obj);
// Object.defineProperty(obj,"name",{writable:false});
// // 赋值.
// Object.defineProperty(obj,"sax",{value:"女"});
// // obj.name="wss";
// console.log(Object.getOwnPropertyDescriptor(obj,"sax"));
//
// // 访问器属性.
// var book = {
//     _year: 2019,
//     num: 1,
// };
// Object.defineProperty(book,'year',{
//     get: function() {
//         return this._year;
//     },
//     set: function(val) {
//         if(val !== this._year) {
//             this._year = val;
//             this.num++;
//         }
//     }
// })
// console.log(book['year'])


// // arr2=arr1.slice(0);
// arr2 = Object.assign([], arr1);
// console.log(arr2);

// 数组去重.
let arr1 = [1, 2, 3, 2, 1];
// let arr2 = Array.from(new Set(arr1));
// console.log(arr2);

// let arr2 = arr1.filter((value, index) => {
//     return index === arr1.indexOf(value)
// });
// let demo = new Set(arr1);
// [...demo];



// console.log(arr2);