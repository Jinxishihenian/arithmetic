var a = require('a.js');
console.log(a.name);
a.name = 'rename';
var b = require('a.js');
console.log(a.getAge());