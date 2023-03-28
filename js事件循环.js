/*
const foo = () => console.log('First');
const bar = () => {
    setTimeout(() => {
        console.log('Two');
    }, 500)
};
const baz = () => console.log('Three');
bar();
foo();
baz();*/

function greet() {
    return "Hello";
}

function respond() {
    return setTimeout(() => {
        return "Hey"
    }, 1000)
}

greet();
respond();