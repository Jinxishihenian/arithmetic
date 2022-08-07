// // 防抖.
// const antiShake = (callBack: any, time) => {
//     let flat;
//     return (...props) => {
//         if (flat != null) clearTimeout(flat);
//         flat = setTimeout(() => {
//             callBack(props);
//             flat = null;
//         }, time);
//     }
// }
//
// // 节流.
// const throttle = () => {
// }
// let flag;
// flag = setTimeout(() => {
// }, 311);
// clearTimeout(flag);
// console.log(flag);
