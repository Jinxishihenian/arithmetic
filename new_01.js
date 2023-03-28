var name ='global';
var obj = {
    name:'local',
    foo: function(){
        this.name ='foo';
    }.bind(window)
};
var bar =new obj.foo();
//
// console.log(bar.name);
