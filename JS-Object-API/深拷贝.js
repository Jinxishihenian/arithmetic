const obj = {
    a: {
        'a1': 'a1',
    },
    b: {
        'b1': 'b1',
        'b2': {
            'b21': 'b21',
        },
    },
    c: 'c1',
}

// 对象深拷贝.
const copy = (obj) => {
    const newObj = {};
    Object.keys(obj).forEach((value) => {
        // 判断是否是对象.
        if (typeof obj[value] === 'object' && !Array.isArray(obj[value])) {
            // console.log('对象信息');
            // console.log(obj[value]);
            newObj[value] = copy(obj[value]);
        } else {
            // console.log('非对象信息');
            // console.log(obj[value]);
            newObj[value] = obj[value];
        }
        // 假设不是对象.
        // newObj[value] = copy(obj[value]);
    });
    // console.log('==最终结果==');
    // console.log(newObj);
    return newObj;
}
const newObj = copy(obj);
console.log('newObj:', newObj);
