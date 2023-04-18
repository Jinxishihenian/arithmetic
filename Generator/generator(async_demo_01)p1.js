function fn(nums) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(nums * 2);
        }, 1000)
    });
}

function* gen() {
    const num1 = yield fn(1);
    console.log(num1)
    const num2 = yield fn(num1);
    console.log(num2)
    const num3 = yield fn(num2);
    console.log(num3)
    return num3
}

/*function genHoc(gen) {
    return () => {
        return new Promise((resolve) => {
            const g = gen();
            const next1 = g.next();
            next1.value.then((res1) => {
                const next2 = g.next(res1);
                next2.value.then((res2) => {
                    const next3 = g.next(res2);
                    next3.value.then((res3) => {
                        resolve(g.next(res3))
                    })
                })
            })
        })
    };
}*/

// 该函数的作用是将Generator函数转换为Promise函数.
// TODO为什么此处使用高阶函数?
/*function genHoc(generatorFn) {
    return () => {
        return new Promise((resolve, reject) => {
            const g = generatorFn();
            const go = (res) => {
                // TODO 对 next 传参了解不深刻.
                const next = g.next(res);
                const { value, done } = next;
                // TODO 判定停止循环条件.
                if (!done) {
                    // TODO 为什么要用一个新的Promise,且值为何要传入resolve不可以直接调用go并且传参?
                    // 为什么要用Promise.resolve包裹value?
                    // 因为value可能是Promise也可能是常量.
                    Promise.resolve(value).then((res) => {
                        go(res)
                    })
                } else {
                    resolve(value);
                }
            }
            go();
        })
    }
}*/

// 不传参版本.
const simpleGenHoc = (generator) => {
    return new Promise((resolve, reject) => {
        const g = generator();
        const go = () => {
            const next = g.next();
            const { value, done } = next;
            if (!done) {
                Promise.resolve(value).then(() => {
                    go()
                });
            } else {
                resolve();
            }
        }
        go();
    })
}

const asyncDemo = simpleGenHoc(gen)
asyncDemo.then(() => {
    console.log('你好我是wss');
})
/**
 * 分析上述代码Generator提供控制权,Promise提供使用控制权的时机.
 */
