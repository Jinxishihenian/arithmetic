/*var name = 'global';
var obj = {
    name: 'local',
    foo: function () {
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();*/
var map = new Map();
map.set('wss', '测试');
console.log(map.get('wss'))
//
// console.log(bar.name);
