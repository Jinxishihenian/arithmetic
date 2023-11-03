// 最长公共子序列
var longestCommonSubsequence = function (text1, text2) {
    let copyText1 = text1.split('');
    let copyText2 = text2.split('');
    let allResult = [];
    while (copyText1.length > 0) {
        let result = [];
        let copyCopyText2 = copyText2.concat([]);
        for (let i = 0; i < copyText1.length; i++) {
            for (let j = 0; j < copyCopyText2.length; j++) {

                if (copyText1[i] === copyCopyText2[j]) {
                    result.push(copyText1[i]);

                    copyCopyText2.splice(0, j + 1)
                    // 停止.
                    break;
                }
            }
        }
        // console.log(result)
        console.log(result.join(','))
        // 不同类型结果的长度.
        allResult.push(result.length);
        // 删除第一个数组的元素.
        copyText1.shift();
    }
    console.log(allResult)
    console.log(Math.max.apply(this, allResult))
    return Math.max.apply(this, allResult);
    // return result.length;
};

let text1 = "mhunuzqrkzsnidwbun"
let text2 = "szulspmhwpazoxijwbq"

// mhziwb
// 5 结果.
// 6 预期.
// let text1 = 'oxcpqrsvwf'
// let text2 = 'shmtulqrypy'
longestCommonSubsequence(text1, text2);