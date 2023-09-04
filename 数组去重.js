// Set方式数组去重.
let arr = [4, 1, 3, 3, 2, '2'];
let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

// filter方法去重.
let arr1 = [4, 1, 3, 3, 2, '2'];
let result = arr1.filter((value, index, self) => {
    return self.indexOf(value) === index;
})
// console.log(result)

// Map去重,利用Map键的唯一性.
let arr2 = [4, 1, 3, 3, 2, '2'];
let result2 =
    Array.from(
        new Map(
            arr2.map((value) => [value, value])
        )
            .values()
    );
console.log(result2)

