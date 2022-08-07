let fun = () => {
}
let obj = {}
console.log(fun.__proto__.constructor);
console.log(obj.__proto__.constructor);

let demo = ({a, b}) => {
    console.log(a);
    console.log(b);
}
demo(a);