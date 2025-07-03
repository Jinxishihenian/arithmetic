const obj = { a: 1, b: { c: 2,d:{e:4} } };

// 完全拷贝一个新的对象.
// 需要递归.
// 1.递归终止条件.
//    将所有属性完全遍历.
// 2.缩小问题规模.
// 3.返回正确结果.
const deepData=(obj)=>{
    const newObject ={};
  for (let i in obj) {
     // 判断是不是对象.
     if(typeof obj[i] === "object" && obj[i] !== null) {
         newObject[i]= deepData(obj[i]);
     }
    console.log(i, obj[i]);
      newObject[i] = obj[i];
  }

    return newObject;
}
const newObject= deepData(obj);
console.log(newObject)