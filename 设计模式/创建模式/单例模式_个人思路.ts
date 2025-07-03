// 1.缓存实例的属性该如何来声明?
// 2.new 的时候怎么保证只有唯一一个实例?

class Single{
    // 用来引用实例.
    private static instence;
    constructor(){
        // if(Single.instence===undefined){
        // Single.instence = new Single();
        // console.log('第一次初始化');
        // }
        // console.log()
        // return Single.instence;
    }
    static getInstence(){
        if(this.instence == null){
            this.instence = new Single();
            console.log('单例模式');
            return this.instence;
        }
        console.log('第一次初始');
        return this.instence;
    }
}
// 获取单例.
Single.getInstence();
console.log('获取单例');
// 获取单例.
console.log(Single.getInstence())
