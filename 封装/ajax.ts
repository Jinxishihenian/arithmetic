// wss封装的ajax类.
interface RequestProps{
    // 请求路径.
    url:string,
    // 请求方法.
    method:string,
    // 请求头信息.
    header?:any,
    // 请求数据.
    data?:any,
    // 请求成功回调.
    success?:(result)=>void,
    // 请求失败回调.
    error?:(error)=>void,
}

class Ajax{
  static _XMLHttpRequest = new XMLHttpRequest();
  static getResult(props:RequestProps ){
      const {header,method,url,success,error,data} = props;
      try {
          // 设置请求头.
          for(let item in header){
                  this._XMLHttpRequest.setRequestHeader(item,header[item]);
          }
          // 设置请求方法类型,设置url.
          this._XMLHttpRequest.open(method,url);
          // 设置请求数据.
          this._XMLHttpRequest.send(data);
          // 监听数据.
          this._XMLHttpRequest.onreadystatechange = () =>{
              if(this._XMLHttpRequest.readyState == 4 && this._XMLHttpRequest.status==200){
                  success(this._XMLHttpRequest.responseText);
              }
          };
      }catch(e){
          error(e);
      }
   }
}