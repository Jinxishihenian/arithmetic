let numbers = [0,1,2];

let proxyNums = new Proxy(numbers,{
    get(target,key){
        return key in target? target[key] : 0;
    }
})

console.log(proxyNums[1]);
console.log(proxyNums[23]);