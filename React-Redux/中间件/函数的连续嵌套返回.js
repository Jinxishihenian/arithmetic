function middleware(store){
   return function(next){
       return function(action){
           // 自定义逻辑.
           return next(action);
       }
   }
}

// 调用方式.
middleware(1)(2)(3);