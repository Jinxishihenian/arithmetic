// 检验数据类型,前提Object.prototype.toString.call(obj);
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call({}))
console.log(Object.prototype.toString.call(undefined))
console.log(Object.prototype.toString.call(null))
console.log(Object.prototype.toString.call(1))
console.log(Object.prototype.toString.call(''))
console.log(Object.prototype.toString.call(NaN))


// []
// 校验数据类型.
// 我认为高阶函数可以根据传入的不同参数值,创建出一种功能类似的函数.
// 此函数也叫偏函数.
const isType = (type) => {
    return (obj) => {
        return Object.prototype.toString.call(obj) === `[object ${type}]`
    }
}

const isArray = isType('Array');
const isNumber = isType('Number');

console.log(isArray([]))
console.log(isArray(1))
console.log(isNumber(NaN))
// Math.min.call([1, 3, 4, 5]);
console.log(Math.min.apply(null, [1, 3, 4, 5]))
console.log(Math.min.call(null, 1, 3, 4, 5))