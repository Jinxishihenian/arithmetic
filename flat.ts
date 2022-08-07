// let tree: any[] = [1, [2, 3], [5, 6, [9, 0]]];
// 扁平化数组(方案1).
const customPlat = (arr: any[]) => {
    let result: any[] = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            // 拆分数组.
            result = result.concat(customPlat(item));
        } else {
            // 整合数组.
            result.push(item);
        }
    }
    return result;
}

// es6自带函数(方案2).
const es6customFlat = (arr: any[]) => {
    return arr.flat(Infinity);
}

// 栈结构(方案3).
const stock = (arr: any[]) => {
    let _arr = JSON.parse(JSON.stringify(arr));
    let _result = [];
    while (_arr.length > 0) {
        let top = _arr.pop();
        if (Array.isArray(top)) {
            // 结构.
            _arr.unshift(...top);
        } else {
            _result.push(top);
        }
    }
    return _result;
}

// 强类型转换(方案4).
const transition = (arr: any[]) => {
    return arr.toString().split(',').map((item) => Number(item));
}

// 持续结构(方案5);
const unfasten = (arr: any[]) => {
    let _arr: any[] = arr.concat([]);
    while (_arr.findIndex((item) => Array.isArray(item)) > 0) {
        _arr = [].concat(..._arr);
    }
    return _arr;
}
//
let tree = [1, [2, 3], [5, 6, [9, 0]]];
let ce = [1, 23];
let result = tree.concat(ce);
console.log(result);

// let demo2: any[] = [].concat(...tree);
// console.log(demo1);
// [1, [2, 3], [5, 6, [9, 0]]]
// console.log(demo2);
// 1, 2, 3, 5, 6, [9, 0]
// console.log(transition(tree));
// console.log(unfasten(tree));
// console.log(customPlat(tree));
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// const array3 = array1.concat(array2);

// console.log(array3);
