const obj = {
    name: "John",
    regularFunc: function () {
        console.log("Regular function this:", this.name); // 此处的 this 指向 obj
    },
    arrowFunc: () => {
        console.log("Arrow function this:", this.name); // 此处的 this 仍然指向全局对象（通常是 window）
    }
};

obj.regularFunc(); // 输出 "Regular function this: John"
obj.arrowFunc();   // 输出 "Arrow function this: undefined"，因为全局对象没有 name 属性