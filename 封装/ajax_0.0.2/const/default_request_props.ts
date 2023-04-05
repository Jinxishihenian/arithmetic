import {GET_METHOD} from "./defalut_request_method";
import {AJAX_DEFAULT_TYPE} from "./request_date_submit_type";

interface RequestProps{
    // 请求路径.
    url:string,
    // 请求方法.
    method:string,
    // get请求数据.
    props:any,
    // 请求头信息.
    header?:any,
    // 请求数据.
    data?:any,
    // 响应数据类型.
    responseType:any,
    // 规定请求数据类型(与后台解析数据的方式).
    requestDataType:string,
    // 设置跨域是否携带cookie.
    withCookieCertificate:boolean,
    // 规定超时时间.
    timeoutTime:number,
    // 请求成功.
    success?:(result)=>void,
    // 请求失败.
    error?:(error)=>void,
    // 请求超时.
    timeout:()=>void,
    // 请求错误码.
    errorStateCode:()=>void,
}

const requestDefaultProps={
    url:'',
    method:GET_METHOD,
    header:{
        // 写默认请求头.
    },
    props:null,
    data:null,
    requestDataType:'',
    responseType:AJAX_DEFAULT_TYPE,
    withCookieCertificate:true,
    timeoutTime:0,
    success:()=>{},
    error:()=>{},
    timeout:()=>{},
    errorStateCode:()=>{},
}

export default requestDefaultProps;