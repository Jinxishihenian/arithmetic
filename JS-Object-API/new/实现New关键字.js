function create() {
    // 创建一个空对象.
    let obj = new Object();
    // 将arguments转换为数组,在调用shift方法返回第一个参数,也就是构造函数.
    let Con = [].shift().call(arguments);
    // 连接到原型.
    obj.__proto__ = Con.prototyep;
    // 绑定this,执行构造函数(因为apply会自动执行函数,注意现在的argument里面只有进来的属性值)
    let result = Con.apply(obj, arguments);
    return typeof result === 'object' ? result : obj
}