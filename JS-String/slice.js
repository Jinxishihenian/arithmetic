// slice(indexStart);
// slice(indexStart,indexEnd)
// indexStart 返回的子字符串中包含的第一个字符的索引.
// indexEnd 从返回的字符串中排除的第一个字符的索引.
// 不会影响原来的字符串.
const demo = '你好呀小朋友';
const info = demo.slice(2,5);
// console.log(info);

const info2 = demo.slice(3,5);
console.log(info2);

console.log('[Object Object]'.slice(8,-1))
console.log(demo.slice(0,1));