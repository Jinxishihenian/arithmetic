const a= 3;
const obj = {
    a:1,
    b:2,
}
const log = (value)=>{
    console.log(value);
}
log.call(obj,1,2,3);
