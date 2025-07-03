const data = [1,2,3];

// 浅拷贝1.
const data1= [].concat(data);
console.log(data1);
console.log([...data]);