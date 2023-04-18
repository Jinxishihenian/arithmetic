const fn = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log(value)
            resolve(value * 2);
        }, 1000)
    })
}

function* gen() {
    const value1 = yield fn(2);
    console.log(value1)
    const value2 = yield fn(value1);
    console.log(value2)
    const value3 = yield fn(value2);
    console.log(value3)
    return value3;
}

// 没有异常处理版本.
function genHoc(generator) {
    return () => {
        return new Promise((resolve, reject) => {
            const g = generator();
            const go = (res) => {
                const { value, done } = g.next(res);
                if (!done) {
                    Promise.resolve(value).then((res) => {
                        go(res);
                    })
                } else {
                    resolve(value);
                }
            }
            go();
        });
    }
}

const asyncDome = genHoc(gen);
asyncDome().then((res) => {
    // console.log(res);
})