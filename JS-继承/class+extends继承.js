// 类模板.
class Animal{
    constructor(name){
        this.name = name;
    }
}

// 继承类
class Cat extends Animal{
    constructor(name) {
        super(name);
        // super作为函数调用是,代表父类的构造函数.
    }

    eat(){
        console.log('eating')
    }
}