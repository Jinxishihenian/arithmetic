// 传递的可能是null,空字符串,空数组,空对象.
// 重点是对应null定义.
function func(parps){
   // 1.首先判断是否是null.
   if(parps==null){
        console.log('null');
        return;
    }
   // 2.判断是否是String类型.
   if(typeof parps=="string" ){
      if(parps.length===0){
          console.log("空字符串");
          return;
      }
   }
   // 3.判断是否是数组.
   if(Array.isArray(parps)){
        if(parps.length===0){
            console.log("空数组");
            return;
        }
    }
   // 4.判断是否对象.
   if(Object.prototype.toString.call(parps)==="[object Object]"){
     if(parps.toString()==="{}"){
         console.log("空对象");
         return;
     }
   }
   console.log('不是空,或者是其他类型');
}
// func(null);
// func("");
// func([]);
// console.log({});
func(new Set(\[1,23]));