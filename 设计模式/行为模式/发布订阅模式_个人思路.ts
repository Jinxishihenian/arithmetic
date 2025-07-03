// // 发布-订阅模式.
// class EventBus{
//    // 事件队列.
//    private events = [];
//
//    // 订阅方法.
//    public subscribe(event){
//       this.events.push(event);
//    }
//
//    // 触发方法.
//    public publish(){
//       this.events.forEach(event => event());
//    }
//
//    // 是否应该有一个注销方法?
//       // 有注销订阅方法.
//    // 触发时是否触发的全部?如果不触发全部该怎么做?
//       // 并不是触发所有方法.
//    // 触发后是否要将该事件从事件队列中排除?
//    // 一个事件可以注册多次.
// }
//
// const eventBus = new EventBus();
// eventBus.subscribe(()=>{
//    console.log('订阅事件1');
// });
// eventBus.subscribe(()=>{
//    console.log('订阅事件2');
// })