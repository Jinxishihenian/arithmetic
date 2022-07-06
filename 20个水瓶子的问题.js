let bottle = 20;
/*    getSumbottle = (val) => {
        // val = val 如何加?
        // 这样停
        if (val <= 1) {
            return;
        }
        // sum = val + val / 2;
        return val + getSumbottle(val / 2);

    }
    // 未搞定
    console.log(sum);
    */
// 第二次测试
getSumbottleToo = (val) => {
    let sunWater = 0;
    let water = 0;
    let nuWater = 0;
    let ellWater = 0;
    water = val;
    nuWater = water + ellWater;
    while (nuWater > 1) {
        nuWater = water + ellWater; // 有多少水就有多少空瓶子
        sunWater = sunWater + water;
        if (nuWater % 2 == 0) {
            ellWater = 0;
            water = nuWater / 2;//我将会计算两次
        } else if (nuWater % 2 != 0) {
            // console.log(1);
            ellWater = 1;
            water = (nuWater - 1) / 2;
        }
    }
    return sunWater;
}

console.log("空瓶子数");
console.log(getSumbottleToo(20));
