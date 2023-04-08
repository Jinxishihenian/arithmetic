function curr() {
    // 删除所有元素从索引1开始.
    // 将slice方法注入到arguments对象内传入参数1并调用.
    console.log(Array.prototype.slice.call(arguments, 1))
}

curr(3, 4, 5, 6);
console.log([3, 4, 5, 6].splice(2))
