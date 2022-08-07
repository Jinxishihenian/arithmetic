// typeof 可以输出的内容.
// 无法区分 null(Object) Object array(Object).
// let types = [{}, [], () => {
// }, null, undefined, "", 1, false, Symbol(),NaN];
// types.forEach((e) => {
//     console.log(typeof e)
// });

// Number.NaN知识点.
// 1.NaN不等于NaN自身.
// 2.判断NaN 用NaN!==NaN自身.
// 3.NaN既不等于ture也不等于false.
// console.log(NaN === NaN);

// 类型检查.
// console.log(null instanceof Object);
// console.log(null instanceof undefined);
// console.log(Object.prototype.toString.call(null));
// 以下输出Object为Object为js的bug.
// console.log(typeof null);

// 隐式转换.
// const toBoolean = [0, 1, -1, [], [1], '', '0', '1', true];
// toBoolean.forEach((e) => console.log(Boolean(e)));
// 输出.
// false
// true
// true
// true
// false
// true
// true
// true

// 数组去重.
// const nums = [1,3,45,7,1,6,6];
// console.log(Array.from(new Set(nums)));

// reduce方法的使用.
// let arrs = [0, 1, 2, 3, 5];
// let result = arrs.reduce((old, input, i) => {
//     console.log(i);
//     return old + input;
// }, 1);
// console.log(result);

// ES6 数组解构.
// let [a, b, c] = "a,b,c"
// console.log(a);
// console.log(b);
// console.log(c);

// let maps = [1, 2, 3].map((value, index) => {
//     // console.log(k);
//     // console.log(n);
//     return value + 1;
// });
// console.log(maps);
// let arrs = "123";
// console.log([...arrs]);
// console.log([].map.call("123"));
// console.log(Infinity);
// A. null == undefined
// 输出内容为 true
// B. null === undefined
// false
// C. null === null
// true
// D. NaN == null
// false
// E. NaN === NaN
// false
// F. Infinity + 1 !== Infinity
// true
// 节流.
// let jl = (call, time) => {
//     let lock = false;
//     /*setTimeout(() => {
//     }, time);*/
//     return (() => {
//         if (!lock) {
//             lock = true;
//             setTimeout(() => {
//                 call();
//                 lock = false;
//             }, time);
//         }
//     })()
// }
// jl(() => {
//     console.log("你好")
// }, 2000);
// 防抖.

// let ce = () => {
//     console.log(arguments);
// }
// console.log("你好世界!");

let test = {name: '小明'};
let demo = {key: '小红'}
console.log(Object.assign(test, demo));
// test.a