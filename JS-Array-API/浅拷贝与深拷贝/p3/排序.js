const arr = [8, 1, 5, 3, 21, 1, 3, 4];
// a-b 从小到大排序.
arr.sort((a, b) => a - b);
console.log(arr);

// 冒泡排序法.
const mp = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        arr[i]
        arr[i+1]
    }
    return arr;
}