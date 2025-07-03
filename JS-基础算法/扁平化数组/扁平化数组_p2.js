const arr= [[1,2],3,4,5];
// flat 方式1.
// console.log(arr.flat(1));
// 递归关键点.
// 1.如何才能递归下去?
// 2.如何收集值?
//     - 确认每次返回值
//        - 1.item 2.arr 两种可能性.
//            - arr来思考;
//              - 假设每次递归都可以返回一个一维数组.
//              - 面临一个问题 无法递归下去.
//              - 为什么没有办法递归下去 x?
//              - 因为 arr 本身是数组,无法驱动下次 x.
//              - 驱动方式 重复调用自己.
//              - 每次驱动要做什么?
//              - 将不是一维数组的项,结构并返回.
//              - 那你需要假设,最后每一个都是一位项.
//            - item来思考;
//

// 递归 方式2 循环.
const dg = (arr)=>{
    let result = [];
    // 如果不是一维数组.
    arr.map((value, index, self) => {
        const isYW = Array.isArray(value);
        // 如果是普通元素.
        if(!isYW){
            // return value;
            result.push(value);
        }else {
            // console.log(value);
            // return dg([].concat(...value));
            // concat 并不会合并改变原数组.
           result = result.concat(dg([].concat(...value)));
        }
    });
    // console.log('信息')
    // console.log(info);
    // return info;
    return result;
}
// console.log(dg(arr));
// const dg = (arr)=>{
//   if(arr.isArray){
//       return [...arr];
//   }
//
// }
// 方式3 reduce
const arr2 = [[1,2],3,4,5];
const dg2 = (arr)=>{
    const info = arr2.reduce((accumulator, value, index, self) => {
        const isYW = Array.isArray(value);
        // 普通元素.
        if(!isYW){
          return accumulator.concat(value);
        }else{
            // return  dg(accumulator.concat([...value]));
          return accumulator.concat(dg(value));
        }
    },[]);
    return info;
}
console.log(dg2(arr2));

// 方式4.
// 深度优先.
// 广度优先.