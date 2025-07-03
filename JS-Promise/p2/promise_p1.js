// 工厂模式,减少重复代码(重点是封装).
function orderProduct(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('订单完成');
        })
    })
}

// myOrder当做一个物流单号.
let myOrder = orderProduce();

// .then 就相当于订阅物品送达.
myOrder.then((msg)=>{
    console.log(msg);
})