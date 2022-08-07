//引入
// import content, {title} from './depend';
//
// console.log(`${title + content}`);

// splice 函数的用法.
// let myFish = ["angel", "clown", "mandarin(索引2)", "sturgeon"];
// deleteContent代表被删除后的数组.
// let deleteContent = myFish.splice(2,0,"drum");
// let deleteContent = myFish.splice(2, 0, "drum", "guitar");
// let deleteContent = myFish.splice(3, 1,);
// let deleteContent = myFish.splice(2, 1, "trumpet");
// let deleteContent = myFish.splice(0, 2, "parrot", "anemone", "blue");
// let deleteContent = myFish.splice(-2, 1);
// let deleteContent = myF// 节流.
// let jl = (call, time) => {
//     let lock = false;
//     /*setTimeout(() => {
//     }, time);*/
//     return (() => {
//         if (!lock) {
//             lock = true;
//             setTimeout(() => {
//                 call();
//                 lock = false;
//             }, time);
//         }
//     })()
// }
// jl(() => {
//     console.log("你好")
// }, 2000);
// // 防抖.ish.splice(2);

// 假如当网页的网址有这样的参数 test.htm?id=896&s=q&p=5，则调用 GetUrlParam("p")，返回 5。
const getQueryValue = (url: string, query: string): string => {
    let queryUrls;
    let queryMaps;
    // 切割为数组[0]为废弃,[1]有相关参数.
    queryUrls = url.split('?');
    if (queryUrls.length <= 1) {
        return "没有请求参数";
    } else {
        let mapItem: any = {};
        // 剩余请求部分.
        queryMaps = queryUrls[1].split("&");
        // 循环有效部分数据.
        queryMaps.forEach((e) => {
            let maps: any[] = e.split("=");
            let keys: string = maps[0];
            // 生成有效查询对象.
            mapItem[`${keys}`] = maps[1];
        });
        return mapItem.hasOwnProperty(query) ? mapItem.mapItem[query] : "Contains no parameters";
    }
}

console.log(getQueryValue("test.htm?id=896&s=q&p=5", "b"));
