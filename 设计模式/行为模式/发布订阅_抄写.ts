// 函数签名 泛型函数.
// T 与 T = any的区别是默认 T 是 any在不声明的情况下.
type Callback<T = any>=(payload:T)=>void;

// 发布订阅抄写.
class EventBus1{
   private eventMap:Map<string,Callback[]> = new Map();

   // 订阅事件.
   // 泛型函数调用泛型函数.
   public on<T = any>(event:string,callback:Callback<T>):void{
       if(!this.eventMap.get(event)){
           this.eventMap.set(event,[]);
       }
       // 前面经过检测后在使用 ! 操作符是合适的.
       this.eventMap.get(event)!.push(callback);
    }

   // 取消订阅.
   public off<T = any>(event: string,callback?:Callback<T>):void{
       // 判断是否有该事件.
       if(!this.eventMap.get(event)){
           return;
       }
       // 这里多了一个逻辑是可以取消一个指定注册的函数而非全部取消.
       // 判断是否传入了指定的函数引用,可以将指定的引用函数删除掉.
       if(!callback){
          this.eventMap.delete(event);
       } else {
          // 这里一定不为undefined 因为上面已经判断过了.
          // 强制不为空的表示是在后面加 !
          const list = this.eventMap.get(event)!;
          // 将指定fn过滤出去.
          // TODO 这里分为假设 list的长度为1和超过1的情况.
          const newFns = list?.filter((fn)=>fn==callback);
          // const
          this.eventMap.set(event,newFns);
       }
    }

   // 发布事件.
   public emit(event:string,payload:any):void{
       const callbacks = this.eventMap.get(event);
       if(callbacks){
          callbacks.forEach(callback=>callback(payload));
       }
   }

   // 清空所有事件.
   public clear():void{
       this.eventMap.clear();
   }
}