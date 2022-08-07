// 请求参数解码.
const paramEncoded =(param)=>{
  let result =[];
  if(param==null){
      return '';
  }
  for(let [key,value] of param){
      let _key = encodeURIComponent(key);
      let _value =encodeURIComponent(value);
      let item ={};
      item[_key]=_value;
      result.push(item);
  }
  return '?'+result.join('&');
}
export {paramEncoded}