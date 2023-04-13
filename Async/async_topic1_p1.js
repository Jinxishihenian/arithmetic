async function greet() {
    return 'Hello!'
}

console.log(Promise.resolve('Hello!'))
console.log(greet())