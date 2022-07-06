let arr = [4, 1, 3, 3, 2, '2'];
console.log(new Set(arr));
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [4, 1, 3, 2, "2"]
