// 输入：
// [4,5,6],[1,2,3]
// 返回值：
// [1,2,3,4,5,6]
// 复制
// 说明：A数组为[4,5,6]，B数组为[1,2,3]，后台程序会预先将A扩
// 容为[4,5,6,0,0,0]，B还是为[1,2,3]，m=3，n=3，传入到函数merge
// 里面，然后请同学完成merge函数，将B的数据合并A里面，
// 最后后台程序输出A数组.

// 1.先合并后排序.

let a = [4, 5, 6];
let b = [1, 2, 3];
a = a.concat(b);
a.sort((a, b) => {
    // 从大到小.
    return b - a;
});
// console.log(a);
let arr = [111, 33, 222, 4];
arr.sort((a, b) => b - a);
console.log(arr)