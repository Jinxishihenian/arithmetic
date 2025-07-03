// 超类.
function SuperType(){}
// 子类.
function SubType(){}

const superType = new SuperType();

SuperType.prototype.getName = function(){
    console.log('superType');
};

SubType.prototype.getName = function(){
    console.log('subType');
}
// 如果在这初始化就会出现陷阱.
// const subType = new SubType();
SubType.prototype = superType;

const subType = new SubType();
subType.getName();



