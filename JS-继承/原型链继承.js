// 类模板.
function Animal(name){
    this.name = name;
}

// 添加原型方法.
Animal.prototype.eat=function(){
    console.log("eating")
}

function Cat(furColor){
    this.furColor = furColor;
}

// 继承类.
Cat.prototype = new Animal();
// 子类实例的原型等于父类的实例.