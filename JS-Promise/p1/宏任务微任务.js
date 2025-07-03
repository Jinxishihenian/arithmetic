console.log('log0')

setTimeout(() => {
    console.log('log1-1');
    new Promise((resolve, reject) => {
        console.log('log1-2');
        resolve();
    }).then(() => {
        console.log('log1-3');
        setTimeout(() => {
            console.log('log1-4');
        })
    })
})

setTimeout(() => {
    console.log('log2-1');
    new Promise((resolve, reject) => {
        console.log('log2-2');
        resolve();
    }).then(() => {
        console.log('log2-3');
        setTimeout(() => {
            console.log('log2-4');
        })
    })
})

setTimeout(() => {
    console.log('log3-1');
    new Promise((resolve, reject) => {
        console.log('log3-2');
        resolve();
    }).then(() => {
        console.log('log3-3');
        setTimeout(() => {
            console.log('log3-4');
        })
    })
})

Promise.resolve().then(() => {
    console.log('Promise');
    setTimeout(() => {
        console.log('log4');
    })
})

console.log('logEnd')
// 第一次事件循环.
// log0
// logEnd(宏任务内容结束)
// JS-Promise(微任务结束)
// 第二次事件循环.
// log1-1
// log1-2
// log2-1
// log2-2
// log3-1
// log3-2
// log4(宏任务内容结束)
// log1-3
// log2-3
// log3-3
// log4(为任务内容结束)
// 第三次事件循环开始.
// log1-4
// log2-4
// log3-4
// 分析输出日志.
// 主流程(宏任务1)->执行栈->执行console.log('log0')->输出log0->console.log('log0')弹出执行栈.
// 输出log0.
// setTimeout1(宏任务1)->执行栈->执行setTimeout1->委托WEB API管理(满足条件后放置宏任务队列)->setTimeout1弹出执行栈->4ms后回调内容交由宏任务队列管理.
// setTimeout2
// setTimeout3
// JS-Promise.resolve(宏任务1)->执行栈->执行Promise.resolve->将then回调交由微任务管理.
// 目前宏任务队列中有,setTimeout1,setTimeout2,setTimeout3中的回调,微任务队列中有Promise的回调.
// 主流程(宏任务1)...执行console.log('logEnd')->输出'logEnd'->console.log('logEnd');弹出执行栈
// 输出log4.
// 执行栈为空->事件循环启动->开始查看微任务队列中是否有任务->发现微任务中有.then的回调(setTimeout4)->执行栈执行setTimeout4->setTimeout4的回调委托WBE API 管理->setTime4,Promise弹出执行栈->微任务结束(第一次事件循环结束)->执行栈为空,微任务队列为空.


