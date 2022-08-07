import requestDefaultProps from "./const/default_request_props";
import {GET_METHOD} from "./const/defalut_request_method";
import {JSON_TYPE} from "./const/request_date_submit_type";
import {paramEncoded} from "./utils/param_encoded";
// wss_Ajax_0.0.1;
// class Ajax{
//   static _XMLHttpRequest = new XMLHttpRequest();
//   static getResult(props:RequestProps ){
//       const {header,method,url,success,error,data} = props;
//       try {
//           // 设置请求头.
//           for(let item in header){
//                   this._XMLHttpRequest.setRequestHeader(item,header[item]);
//           }
//           // 设置请求方法类型,设置url.
//           this._XMLHttpRequest.open(method,url);
//           // 设置请求数据.
//           this._XMLHttpRequest.send(data);
//           // 监听数据.
//           this._XMLHttpRequest.onreadystatechange = () =>{
//               if(this._XMLHttpRequest.readyState == 4 && this._XMLHttpRequest.status==200){
//                   success(this._XMLHttpRequest.responseText);
//               }
//           };
//       }catch(e){
//           error(e);
//       }
//    }
// }
class AjaxPlus {
    xhr;
    url;
    parameter;

    constructor(url, parameter) {
        this.xhr = new XMLHttpRequest();
        this.parameter = parameter;
        this.init();
    }

    init() {
        // 合成参数.
        let parameter = Object.assign(requestDefaultProps, this.parameter);
        // 配置xhr.
        this.setCookie();
        // 监听回调.
        this.bind();
        this.xhr.option(parameter);
        this.setHeader();
        this.open();
        // 发送.
        this.send();
    }

    bind() {
        const {success, error, timeout} = this.parameter;
        let xhr = this.xhr;
        // 绑定成功函数.
        xhr.addEventListener('load', () => {
            if (this.isRead()) {
                success(xhr);
            } else {
                error(xhr);
            }
        });
        // 绑定失败函数.
        xhr.addEventListener('error', (data) => {
            error(xhr);
        });
        // 绑定超时函数.
        xhr.addEventListener('timeout', (data) => {
            timeout(xhr);
        });
    }

    open() {
        const {method, props} = this.parameter;
        this.xhr.open(method, this.url + paramEncoded(props));
    }

    send() {
        const {requestType, data} = this.parameter;
        const xhr = this.xhr;
        // let data;
        // get请求.
        if (this.isGet()) {
            xhr.send();
            return;
        }
        // 数据类型为formData数据.
        if (this.isFormData()) {
            return;
        }
        // 普通post数据.
        if (this.isPost()) {
            xhr.send(data);
            return;
        }
        // 数据类型为json的数据.
        if (this.isJSON()) {
            xhr.setHeader('Content-Type', JSON_TYPE);
            xhr.send(data);
            return;
        }
        // 其他.
        xhr.send();
    }

    setHeader() {

    }

    isGet() {
        const {requestType} = this.parameter;
        return requestType.toLowerCase() == GET_METHOD.toLowerCase();
    }

    isPost() {
        return true;
    }

    isFormData() {
        const {data} = this.parameter;
        return Object.getOwnPropertyDescriptor.toString.call(data) === '[Object FormData]';
    }

    isJSON() {
        const {requestType} = this.parameter;
        return requestType.toLowerCase() == JSON_TYPE.toLowerCase();
    }

    isRead() {
        let xhr = this.xhr;
        return xhr.readyState == 4 && (xhr.status > 200 && xhr.state <= 300);

    }

    // 跨域时带上cookie.
    setCookie() {
    }

    getXHR() {
        return this.xhr;
    }
}