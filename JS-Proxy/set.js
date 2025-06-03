let nums = [];
let proxyNums = new Proxy(nums,{
    set(target,prop,value){
        if(typeof value !=='number'){
            console.log('只能存放数字')
            return false;
        }
        target[prop] = value;
        // 必须返回ture表示写入成功.
        return true;
    }
})

proxyNums.push(1)
proxyNums.push('1')