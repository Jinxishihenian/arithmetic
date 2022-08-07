import {CONTENT_TYPE_FORM_URLENCODED, HTTP_GET} from "./const";

interface DefaultParameter {
    // 请求方法.
    method: string,
    // 请求头参数.
    headers: any,
    // 请求体参数.
    data: any,
    // Content-Type类型(post数据提交方式).
    contentType: string,
    // 响应类型.
    responseType: string,
    // 超时时间.
    timeoutTime: number,
    // 是否携带cookie.
    withCredentials: boolean,
    // 成功时的回调方法.
    success: Function,
    // 状态码异常时执行的方法.
    httpCodeError: Function,
    // 失败时执行的方法.
    error: Function,
    // 终止时执行的方法.
    abort: Function,
    // 超时时执行的方法.
    timeout: Function,
}

// 默认参数.
export const optionsParameter: DefaultParameter = {
    method: HTTP_GET,
    headers: null,
    data: null,
    contentType: CONTENT_TYPE_FORM_URLENCODED,
    responseType: '',
    timeoutTime: 0,
    withCredentials: false,
    success: () => {
    },
    httpCodeError: () => {
    },
    error: () => {
    },
    abort: () => {
    },
    timeout: () => {
    }
}