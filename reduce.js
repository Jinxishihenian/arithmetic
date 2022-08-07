let untreated = [
    { time: '5月', value: "秋风5" },
    { time: '6月', value: "秋风6" },
    { time: '5月', value: "秋风5" },
    { time: '8月', value: "秋风8" },
    { time: '5月', value: "秋风5" },
    { time: '5月', value: "秋风5" },
    { time: '8月', value: "秋风8" },
    { time: '5月', value: "秋风5" },
    { time: '9月', value: "秋风9" },
    { time: '5月', value: "秋风5" },
    { time: '5月', value: "秋风5" },
];
// 结果
let treated = {};
untreated.reduce((currentValue, currentIndex) => {
    /*  console.log("相关的值");
      console.log(currentValue);
      console.log(currentIndex);*/
    if (treated[currentIndex['time']] == null) {
        treated[currentIndex['time']] = [];
        console.log("开始");
        console.log(treated);
    }
    if (treated[currentIndex['time']] != null) {
        console.log("不为空");
        console.log(currentIndex['time']);
        treated[currentIndex['time']].push(currentIndex);
    }

    return treated;
});

console.log("返回处理后的结果");
console.log(treated);
console.log("返回处理前的结果");
console.log(untreated);
