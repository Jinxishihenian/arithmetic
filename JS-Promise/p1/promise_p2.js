
    /*
    *promise具体是什么东西
    */
    console.log("promise是什么?");
    console.log(Promise);
    /*
    * resolve决定
    * reject拒绝
    */
    var promiseObj = new Promise(function (resolve,reject) {
        setTimeout(function () {
            console.log('两秒后执行');
            resolve('两秒后执行too');
        },2000);
    });
    /*
    *将promise包裹在函数中使用时在调用
    */
    function runAsync() {
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                console.log('两秒后执行Three');
                resolve('通过此函数传递参数');
            },2000)
        });
    }
    runAsync();
    /*
    * 是时候展现promise真正的技术了
   */
    runAsync().then(function (data) {
        console.log(data);
    })
    /*
    *类似于promise的回调函数
    */
     function runAsyncClone(callback) {
         setTimeout(function () {
             callback('传递参数仿');
         },2000);
     }
    runAsyncClone(function (data) {
         console.log(data);
     });
     /*
     * promise的正确姿势
     */
     runAsync().then(function (data) {
         console.log(data);
         return runAsync()
     }).then(function (data) {
         console.log(data)
         return runAsync()
     }).then(function (data) {
         console.log(data);
     });
     /*
     * JS-Promise 处理失败的操作
     */
     function getNumber(){
         var promiseObj = new Promise(function (resolve,reject) {
             setTimeout(function () {
                 var num = Math.ceil(Math.random()*10);
                 if(num<=5){
                     resolve(num);// 将数字传递下去
                 }else if(num>5){
                     reject('数字太大抛出异常');
                 }
             },2000);

         });
         return promiseObj;
     }

     getNumber().then(function (data) {
         console.log('resolve>>>>>>>>>>>>>>>');
         console.log(data);
     },function (reason,data) {
         console.log('reject>>>>>>>>>>>>>>');
         console.log(reason);
     })
    /*
    * promise中catch的用法
    * */
    getNumber().then(function (data) {
        setTimeout(function () {
            console.log('捕获错误');

        },3000);
    }).catch(function (reason) {
        console.log('错误的原因:reason'+`${reason}`);
    })

    /*
    * all的用法 与之相反的是race
    * */
   function run1(){
       return new Promise(function (resolve,reject) {
           setTimeout(function () {
               console.log("一起输出1");
               resolve();
           },3000);
       });
   }
   function run2() {
       return new Promise(function (resolve,reject) {
           setTimeout(function () {
               console.log("一起输出2");
               resolve();
           },6000);
       });
   }
    function run3() {
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                console.log("一起输出3");
                resolve();
            },4000);

        });
    }

    Promise.all([run1(),run2(),run3()]).then(function (results) {
        console.log("全部执行完毕");
    });
