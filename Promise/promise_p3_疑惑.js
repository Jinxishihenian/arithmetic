async function getData() {
    return '1';
}

async function getConsult1() {
    await getData()
    console.log('async1')
}

async function getConsult2() {
    await getData()
    console.log('async2')
}

console.log('start')
getConsult1();
getConsult2();
setTimeout(() => {
    console.log('setTimeOut')
}, 0)

// 是不是只有当getData返回一个Promise是fulfilled的时候，console.log('async1')才会被加入到微任务中？

/*
 是的，只有当getData()函数返回的Promise对象被解析，即状态变为fulfilled时，console.log('async1')
 才会被加入到微任务队列中。在这种情况下，await表达式将会将getConsult1()函数的执行挂起，直到getData()
 返回的Promise对象被解析。如果getData()函数返回的Promise对象被拒绝（即状态变为rejected），则getConsult1()
 函数将抛出一个UnhandledPromiseRejectionWarning异常。如果在await表达式之前的代码中已经处理了这个异常，
 则getConsult1()函数将立即终止执行。
 */



