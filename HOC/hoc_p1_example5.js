function add(x, y) {
    return x + y;
}

function addklh(x) {
    return (y) => {
        return x + y;
    }
}

console.log(add(1, 2))
console.log(addklh(1)(2))
