// 分子(对象实例).
// let molecule = {
//     element: 'molecule',
// }
//
// // 生物(对象实例).
// let biology = {
//     type: 'biology',
// };
//
// // 修改生物原型指向;
// biology.__proto__ = molecule;
//
// // 动物类.
// function animal(name, language) {
//     this.name = name;
//     this.languag = language;
// }
//
// animal.prototype = biology;
//
// let dog = new animal("狗", () => {
//     console.log("汪汪")
// });
//
// console.log(cat.element);


// 使用原型模式进行继承.
// Object 是一个构造函数.
let O = Object();
O.O = 'O';
let A = {
    A: 'A',
};

let B = {
    B: 'B',
};

let C = {
    C: 'C',
};
let D = {
    D: 'D',
};
A.__proto__ = O;
B.__proto__ = A;
C.__proto__ = B;
D.__proto__ = C;

console.log(D.O);
