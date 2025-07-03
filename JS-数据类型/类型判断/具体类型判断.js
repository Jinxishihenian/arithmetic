const st = 'string';
const arr = [1, 3, 2, 1];
const obj = {name:'wss'};

console.log(Object.prototype.toString.call(obj));
console.log(Object.prototype.toString.call(arr));

console.log(typeof obj);
console.log(typeof arr);

console.log(Object.prototype.hasOwnProperty.call(obj,'name'))