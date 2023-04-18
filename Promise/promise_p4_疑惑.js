Promise.resolve(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(0);
    }, 3000);
})).then((res) => {
    console.log(res)
})

// 只有内部Promise的状态变为fulfilled的时候,外部的Promise的状态才会修改.