/*
call
apply
bind
用法解析.
*/
const cat = {
    'name': 'cat',
    'food': '老鼠',
    'ability': function (...arr) {
        console.log(`猫吃${this.food}`);
        console.log(arr)
    },
}
const dog = {
    'name': 'dog',
    'food': '骨头',
    'ability': function (...arr) {
        console.log(`狗吃${this.food}`);
        console.log(arr)
    },
}
const bird = {
    'name': 'bird',
    'food': '虫子',
    'ability': function (...arr) {
        console.log(`鸟吃${this.food}`);
        console.log(arr)
    },
}
/*
cat.ability.call(dog, '小胖', '咪咪');
dog.ability.apply(bird, ['旺财', '来福']);
bird.ability.bind(cat)('麻雀', '燕子');*/
// 题目一
var name = 'window'
var person1 = {
    name: 'person1',
    foo1: function () {
        console.log(this.name)
    },
    foo2: () => console.log(this.name),
    foo3: function () {
        return function () {
            console.log(this.name)
        }
    },
    foo4: function () {
        return () => {
            console.log(this.name)
        }
    }
}
var person2 = { name: 'person2' }

person1.foo1() // person1 没问题
person1.foo1.call(person2) // person2 没问题

person1.foo2() // person1 没问题
person1.foo2.call(person2)// person2 没问题

person1.foo3()()// window 没问题
person1.foo3.call(person2)()// window 没问题
person1.foo3().call(person2)// person2

person1.foo4()()// person1
person1.foo4.call(person2)()// person1
person1.foo4().call(person2)// person1
