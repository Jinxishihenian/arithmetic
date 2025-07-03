class EventBus{
    // 事件管理Map;

    private event = new Map<any,any>();
    // 订阅.
    // TODO callBack的类型.
    public subscribe=(name:string,callBack:any)=>{
        // 如果没有则新注册一个事件.
        if(!this.event.has(name)){
           this.event.set(name,[]);
        }
        const newAll = this.event.get(name);
        newAll.push(callBack);
        this.event.set(name,newAll);
    }
    // 发布事件.
    public emit(name:string,payload:any){
       // 查找是否有该事件.
      if(!this.event.has(name)){
          console.log('抱歉并没有:'+name+'事件');
          return;
      }
      // 假设找到了.
      const callBacks= this.event.get(name);
      callBacks.forEach(callBack=> {
          // 相同事件,传入的参数是同一个.
          callBack(payload);
      })
    }

    // 取消订阅.
    public cancel = (name)=>{
        // TODO 取消订阅的时候是全部取消了.
       if(this.event.has(name)){
           this.event.delete(name);
       }
    }

    // 清空事件.
    public clear(){
       this.event.clear();
    }
}

const events = new EventBus();

// 注册两个函数.
const eventName = 'wss';

events.subscribe(eventName,(props)=>{
    console.log('注册函数1:'+ props);
});
events.subscribe(eventName,(props)=>{
    console.log('注册函数2:' + props);
});

events.emit(eventName,'测试触发');

// 取消一个.
// events.cancel(eventName);
// 测试清空.
events.clear();
events.emit(eventName,'测试触发');
