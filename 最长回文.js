function indexOf(arr, item) {
    if (Array.prototype.indexOf) {
        return arr.indexOf(item);
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == item) {
                return i;
            }
        }
    }
    return -1;

}

var longestPalindrome = function (s) {
    if (s == "") {
        return "";
    }
    var all = [];// 组成结果的所有的数组
    var allEnd = [];// 回文结果数组
    var currMax;
    var allMathMax = [];
    var currString;
    for (var i = 0; i < s.length; i++) {
        // s.length-i,代表我可以截取多少次
        for (var j = 0; j < (s.length - i); j++) {
            currString = s.slice(i, s.length - j);
            all.push(currString);
        }
    }

    all.forEach((v) => {
        if (v == v.split("").reverse().join("")) {
            allEnd.push(v);
        }
    });
    allMathMax = allEnd.map((v) => {
        return v.length;
    });
    Array.prototype.max = function () {
        return Math.max.apply({}, this)
    }

    console.log("所有可能" + all);
    console.log("回文数组" + allEnd);
    console.log("回文数组元素长度" + allMathMax);
    console.log("最长长度" + allMathMax.max());
    console.log("最大值:" + allEnd[indexOf(allMathMax, allMathMax.max())])
    return allEnd[indexOf(allMathMax, allMathMax.max())];
};
longestPalindrome("babad");
