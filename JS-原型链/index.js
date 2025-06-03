function SuperType() {
    this.superTypeValue = true;
}

SuperType.prototype.getSuperType = function () {
    return this.superTypeValue;
}

function SubType() {
    this.subTypeValue = true;
}

// 继承SuperType.
SubType.prototype = new SuperType();

SubType.prototype.getSubType = function () {
    return this.subTypeValue;
}

let instance = new SubType();

console.log(instance.getSuperType())
console.log(Object.prototype.toString.call(instance))


