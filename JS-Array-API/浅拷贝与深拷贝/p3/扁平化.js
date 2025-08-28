const arr1 = [2, [1, 2], [3, 4], [5, 6, [7, 8]]];
// 递归扁平化.
const faltCM = (props) => {
    let result = [];
    props.forEach(element => {
        if (Array.isArray(element)) {
            // concat 不改变原函数,用的时候要接收.
            result = result.concat(faltCM(element));
        } else {
            result.push(element);
        }
    });
    return result;
}
console.log(faltCM(arr1));
console.log('结果');
console.log(arr1);
console.log(arr1.flat(Infinity));
