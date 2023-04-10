var a = 1;

function foo() {
    var a = 2;

    function inner() {
        console.log(this.a);
    }

    inner();  // 将 inner 函数中的 this 值绑定到 foo 函数的执行上下文中
}

foo();  // 输出 2
