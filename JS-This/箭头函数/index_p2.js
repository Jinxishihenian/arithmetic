const name ='wss';
const obj = {
    name:'ling',
    getName:function(){
        console.log(this);
    },
    getOtherName:()=>{
        console.log(this);
    }
}

obj.getOtherName();
obj.getName();