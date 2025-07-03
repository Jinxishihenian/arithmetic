// 扁平化数组算法.
// 数组扁平化.
let tree = [
    1,
    [11, [21, 33]],
    [12]
];

// 1.递归[仿写1].
const customPlat = (arr: any[]) => {
    let result: any[] = [];
    // for...of用来递归数组元素.
    // for...in用来迭代对象属性.
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

// 2.flat函数[仿写1].
let dmo = tree.flat(Infinity);

// 3.栈结构数据(后进先出)[以仿写1].
const stock = (arr: any[]) => {
    let _arr = JSON.parse(JSON.stringify(arr));
    let _result = [];
    while (_arr.length > 0) {
        // pop函数移除数组中最后一项并返回移除的项,修改原数组.
        // TODO pop一直在修改原数组.
        let top = _arr.pop();
        if (Array.isArray(top)) {
            // 从数组头部加入一项,修改原数组.
            _arr.unshift(...top);
        } else {
            // 从数组尾部加入一项,修改原数组.
            _result.push(top);
        }
    }
    return _result;
}

// 4.迭代扁平化数组;
const unfasten = (arr: any[]) => {
    let _arr: any[] = arr.concat([]);
    // findIndex寻找满足条件的下标,未找到则返回-1,下标从0开始,findIndex可以接受一个回调函数.
    while (_arr.findIndex((item) => Array.isArray(item)) > 0) {
        // 关键的一步.
        // TODO 对concat方法理解不深刻.
        // concat方法不会改变现有数组而是返回一个新数组.
        _arr = [].concat(..._arr);
    }
    return _arr;
}


// 5.深度优先(仿1).
/**
 * 这段代码分成两部分来考虑.
 * 1.如何遍历所有项.
 * 2.如何组合所有项.
 * 这样分析写出来的代码会有问题.
 *
 * 按照中间项来进行分析.
 */
const recursion1 = (tree: any, result: any) => {
    // 判断是否是数组.
    if (Object.prototype.toString.call(tree) === '[object Array]') {
        for (let item of tree) {
            recursion1(item, result);
        }
    } else {
        result.push(tree);
    }
}

// 6.广度优先.
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

// 7.深度优先,不使用递归(使用栈先进后出,后进先出).
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


// 8.(递归遍历).
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


// 9.(reduce).
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

// 10.深度优先,栈的数据结构.
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

// 11.
const flatten9 = (arr: any) => {
    return tree.toString().split(',').map((v) => Number(v))
}

// 12.深度优先,栈结构.
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