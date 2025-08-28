const arr = [1, 2, 5, 3, 3, 4, 5];
const qc = (arrP) => {
    return arrP.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}
console.log(qc(arr));