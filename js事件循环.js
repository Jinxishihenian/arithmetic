const foo = () => console.log('First');
const bar = () => {
    console.log('bar')
    setTimeout(() => {
        console.log('Send');
    }, 500)
};
const baz = () => console.log('Third');
bar();
foo();
baz();
// bar
// First
// Third
// Send