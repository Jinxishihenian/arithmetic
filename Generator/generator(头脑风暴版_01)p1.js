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

function genHoc(gen) {
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
}

const demo = genHoc(gen)

demo().then((res) => {
    console.log(res)
})
/**
 * 分析上述代码Generator提供控制权,Promise提供使用控制权的时机.
 */
