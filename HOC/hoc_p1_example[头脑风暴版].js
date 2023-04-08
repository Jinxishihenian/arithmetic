// 假设我们有一个字符串数组，我们希望把它转换为整数数组，其中每个元素代表原始数组中字符串的长度
const windstormMap = (source) => {
    let result = [];
    return (fn) => {
        source.forEach((item, index) => {
            result.push(fn(item))
        });
        return result;
    }
}
let arr = ['王少帅', '小米', '马克菠萝'];
const test = windstormMap(arr)

console.log(
    test((item) => {
        return item.length;
    })
)