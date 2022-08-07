// 数组扁平化.
let tree = [
    1,
    [11, [21]],
    [12]
];
// 方案1(深度优先,使用递归).
const recursion1 = (tree: any, result: any) => {
    // console.log(tree);
    // 判断是否是数组.
    if (Object.prototype.toString.call(tree) === '[object Array]') {
        for (let item of tree) {
            recursion1(item, result);
        }
    } else {
        result.push(tree);
    }
}

// 方案2(广度优先).
// 使用队列,先进先出,后进后出.
const recursion2 = (arr: any) => {
    let result = [];
    for (let item of arr) {
        if (Object.prototype.toString.call(item) === '[object Array]') {
            arr.push(
                ...item,
            );
        } else {
            // console.log(item);
            result.push(item);
        }
    }
    return result;
}

// 方案3(深度优先,不使用递归).
// 使用栈先进后出,后进先出.
const recursion3 = (arr: Array<any>) => {
    let _arr: Array<any> = JSON.parse(JSON.stringify(arr));
    const result: Array<any> = [];
    while (_arr.length > 0) {
        if (Object.prototype.toString.call(_arr[0]) !== '[object Array]') {
            _arr.shift();
        } else {
            for (let item of _arr[0]) {
                // 第一个参数(前提是这个参数必须是数组类型),解构并推入arr中.
                _arr.unshift(item);
            }
        }

    }

    return result;
}


// 方案4
let dmo = tree.flat(Infinity);

// 方案5(递归遍历).
const flatten = (arr: any) => {
    let result: any = [];
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}

// 收集结果.
let result = [];

// 方案6(reduce).
let result1: any = [];
const fn = (tree: any) => {
    return tree.reduce((pre: any, current: any, currentIndex: any, array: any) => {
        if (Array.isArray(current)) {
            pre = pre.concat(fn(current));
        } else {
            // pre.push(current);
            pre = pre.concat(current);
        }
        return pre;
    }, []);
}

// 方案7.
// 深度优先,栈的数据结构.
const flatten7 = (tree: any) => {
    let _tree: any = JSON.parse(JSON.stringify(tree));
    while (_tree.findIndex((item: any) => {
        return Array.isArray(item);
    }) != -1) {
        let result: any = JSON.parse(JSON.stringify(_tree));
        for (let i = 0; i < result.length; i++) {
            if (Array.isArray(result[i])) {
                let arr: any = _tree.splice(i, 1)
                _tree = _tree.concat(...arr);
            }
        }
    }
    return _tree;
}
// console.log(flatten7(tree));
// 方案8.
const flatten8 = (arr: any) => {
    while (arr.findIndex((v: any) => {
        return Array.isArray(v);
    }) != -1) {
        arr = [].concat(...arr);
    }
    return arr;
}

// 方案9.
const flatten9 = (arr: any) => {
    return tree.toString().split(',').map((v) => Number(v))
}

// 深度优先,栈结构.
const recursion4 = (arr: any) => {
    let result: any = [];
    while (arr.length > 0) {
        if (Array.isArray(arr[0])) {
            arr.unshift(...arr.shift());
        } else {
            result.push(arr[0]);
            // 删除第一个.
            arr.shift();
        }
    }
    return result;
}

const recursion04 = (arr: any) => {
    let result = [];
    let _arr = JSON.parse(JSON.stringify(arr));
    while (_arr.length > 0) {
        let item = _arr.pop();
        if (Array.isArray(item)) {
            _arr.unshift(...item);
        } else {
            result.push(item);
        }
    }
    return result;
}
// console.log(fn(tree));
//
// useEffcet(()=>{
//       组件挂载之后
//     return ()=>{
//       组件卸载之前
//     }
// },[])
// let demo = [1, 3, 4, 5, 7, 8, 1, 2, 4, 5, 6, 7, 7];
// let result12 = [];
// let test = demo.sort((a, b) => {
//     return a - b;
// });
// for (let i = 0; i < demo.length; i++) {
//     if (i == 0) {
//         result.push(demo[i]);
//         continue;
//     }
//     if (demo[i - 1] !== demo[i]) {
//         result.push(demo[i]);
//     }
// }
// console.log(demo);
// console.log(result);
// console.log();
// const cleanRepetition = () => {
//
// }

let test = () => {
}

console.log(test.__proto__);
