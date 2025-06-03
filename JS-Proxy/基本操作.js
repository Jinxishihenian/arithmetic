let target = {a:1}
let proxy = new Proxy(target,{})

proxy.b = 2;
// 写操作转发
console.log(target.b);
// 读操作转发.
console.log(proxy.a);

console.log(proxy.b);

for(let k in proxy) console.log(k);// a,b 枚举操作转发