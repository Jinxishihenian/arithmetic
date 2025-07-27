// 函数签名 泛型函数.
// T 与 T = any的区别是默认 T 是 any在不声明的情况下.
type Callback<T = any>=(payload:T)=>void;

// 发布订阅抄写.
class EventBus1{
   private eventMap:Map<string,Callback[]> = new Map();

   // 订阅事件.
   // 泛型函数调用泛型函数.
   public on<T = any>(eventName:string,callback:Callback<T>):void{
       if(!this.eventMap.get(eventName)){
           this.eventMap.set(eventName,[]);
       }
       // 前面经过检测后在使用 ! 操作符是合适的.
       this.eventMap.get(eventName)!.push(callback);
    }

   // 取消订阅.
   public off<T = any>(eventName: string,callback?:Callback<T>):void{
       // 判断是否有该事件.
       if(!this.eventMap.get(eventName)){
           return;
       }
       // 这里多了一个逻辑是可以取消一个指定注册的函数而非全部取消.
       // 判断是否传入了指定的函数引用,可以将指定的引用函数删除掉.
       if(!callback){
          this.eventMap.delete(eventName);
       } else {
          // 这里一定不为undefined 因为上面已经判断过了.
          // 强制不为空的表示是在后面加 !
          const list = this.eventMap.get(eventName)!;
          // 将指定fn过滤出去.
          // TODO 这里分为假设 list的长度为1和超过1的情况.
          const newFns = list?.filter((fn)=>fn!==callback);
          // const
          this.eventMap.set(eventName,newFns);
       }
    }

   // 发布事件.
   public emit<T = any>(eventName:string,payload?:T):void{
       const callbacks = this.eventMap.get(eventName);
       if(callbacks){
          callbacks.forEach(callback=>callback(payload));
       }
   }

   // 清空所有事件.
   public clear():void{
       this.eventMap.clear();
   }
}

// 事件总线.
const eventBus1 = new EventBus1();

const fn1 = (name:string)=>{
    console.log('输出内容1:'+name);
}
const fn2 = (name:string)=>{
    console.log('输出内容2:'+name);
}
const target = 'wss';
// 注册 1.
eventBus1.on(target,fn1);
// 注册 2.
eventBus1.on(target,fn2);

// 触发.
// eventBus1.emit(target,'一个target,多个回调');

// 注销指定回调.
eventBus1.off(target,fn2);
eventBus1.clear();

eventBus1.emit(target,'二次发布');
