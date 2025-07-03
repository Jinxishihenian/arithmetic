class Single{
    // 私有静态属性.
    private static instence:Single;
    // 私有构造函数,外部无法new.
    private constructor(){}

    public static getInstence(){
        if(!Single.instence){
            Single.instence = new Single();
            console.log('首次初始化');
            return Single.instence;
        }
        console.log('获取单例');
        return Single.instence;
    }
}

Single.getInstence();

Single.getInstence();
