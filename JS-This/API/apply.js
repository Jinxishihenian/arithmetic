const a= 3;
const obj = {
    a:1,
    b:2,
}

const log = (...value)=>{
    console.log(value);
}

log.apply(obj,[6,2,3])
