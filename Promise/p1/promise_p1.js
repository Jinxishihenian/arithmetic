/*
// 伪代码.
const audioSettings = {};

// 成功的回调.
function successCallback(result) {
    console.log('音频文件创建成功' + result)
}

// 失败的回调函数.
function failureCallback(error) {
    console.log('音频文件创建失败' + error)
}

// 创建音频函数.
function createAudioFileAsync() {
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

const Promise = createAudioFileAsync(audioSettings);

Promise.then(successCallback, failureCallback);

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);*/

// Promise 异常捕获.
// new Promise((resolve, reject) => {
//     console.log('初始化')
//     resolve();
// })
//     .then(() => {
//         throw new Error('有哪里好像不对');
//         console.log('执行"这个"')
//     })
//     .catch(() => {
//         console.log('执行"那个"')
//     })
//     .then(() => {
//         console.log('执行"这个",无论前面发生了什么')
//     })
// async-await 输出
/*const test = async-await () => {
    return 'test'
}
const promiseTest = () => {
    return new Promise((resolve, reject) => {
        resolve('test');
    }).then((value) => {
        console.log(value)
    });
}
console.log(test())
console.log(promiseTest())*/
function runAsync1() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('1-log')
            resolve('1');
        }, 3000);
    });
    return p;
}

function runAsync2() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('2-log')
            resolve('2');
        }, 3000);
    });
    return p;
}

function runAsync3() {
    let p = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log('3-log')
            resolve('3');
        }, 3000);
    });
    return p;
}

function demo() {
    new Promise((resolve, reject) => {
         resolve('往下走');
    }).then(() => {
       return  runAsync1();
    }).then(() => {
       return  runAsync2();
    }).then(() => {
       return  runAsync3();
    });

}

demo();