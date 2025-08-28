const bb = () => {
    let i = 0;
    return () => {
        i++;
        return i;
    }
}
const test = bb();
console.log(test());
console.log(test());
console.log(test());
console.log(test());