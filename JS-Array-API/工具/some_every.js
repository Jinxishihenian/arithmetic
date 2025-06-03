const arr = [1,2,3,4,5,6,7];
// 任意一个元素满足即可返回 true
const result = arr.some((item)=>{
    return item > 2;
});

console.log(result);

// 所有元素满足才可返回 ture
const result2 = arr.every((item)=>{
    return item < 2;
})

console.log(result2);