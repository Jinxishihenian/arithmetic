// 方式一.
export var name = 'foo module'

export function hello() {
    console.log('hello')
}

export class Person {
}

// 方式二.
var name1 = 'name1'

var sex = '男';

export function fun1() {
}

export class Cat {
}

var baseModule = 'xx'
// as可以用作重命名.
export { name1, fun1, Cat as WssCat, sex as default }

// 默认导出只有一个.
export default baseModule;