import {optionsParameter} from "./default_parameter";
import {addURLData, serializeJSON, serializeURLEncoded} from "./utils/url_form";
import {CONTENT_TYPE_FORM_URLENCODED, CONTENT_TYPE_JSON, HTTP_GET} from "./const";

class Ajax {
    url;
    options;
    xmr;

    // 构造函数.
    constructor(url, options) {
        this.url = url;
        // 合并默认参数与传递的参数.
        this.options = Object.assign({}, optionsParameter, options);
        this.init()
    }

    // 初始化方法.
    init() {
        // 初始化XMLHttpRequest.
        const xmr = new XMLHttpRequest();
        this.xmr = xmr;
        // 绑定回调事件.
        this.bindEvents();
        // 配置设置.
        xmr.open(
            // 设置请求方法.
            this.options.method,
            // 设置url.
            this.url + this.addParam(),
            //
            true,
        );

        // 指定响应中包含的数据类型.
        this.setResponseType();

        // 设置cookie.
        this.setCookie();

        // 设置超时.
        this.setTimeOut();

        // 发送请求.
        this.sendData();
    }

    // 绑定事件方法.
    bindEvents() {
        const xhr = this.xmr;
        const {success, httpCodeError, error, abort, timeout} = this.options;

        // load 事件.
        xhr.addEventListener('load', () => {
            if (this.isReady()) {
                success(xhr.response, xhr);
            } else {
                error(xhr);
            }
        }, true);

        // error 事件.
        xhr.addEventListener('error', () => {
            error(xhr);
        }, true);

        // abort 事件.
        xhr.addEventListener('abort', () => {
            abort(xhr);
        }, true);

        // timeout 事件.
        xhr.addEventListener('timeout', () => {
            timeout(xhr);
        }, true);
    }

    // 判断请求是否得到正确的响应方法.
    isReady() {
        const xhr = this.xmr;
        return (xhr.state >= 200 && xhr.state < 300) || xhr.state === 304;
    }

    // 在URL上增加参数的方法.
    addParam() {
        const {params} = this.options;
        if (!params) {
            return '';
        }
        return addURLData(this.url, serializeURLEncoded(params));
    }

    // 设置提交数据方式.
    setResponseType() {
        this.xmr.responseType = this.options.responseType;
    }

    // 设置跨域是否携带Cookies的方法.
    setCookie() {
        if (this.options.withCredentials) {
            this.xmr.withCredentials = true;
        }
    }

    // 设置超时时长方法.
    setTimeOut() {
        const {timeoutTime} = this.options;
        if (timeoutTime > 0) {
            this.xmr.timeout = timeoutTime;
        }
    }

    // 发送请求的方法.
    sendData() {
        const xhr = this.xmr;
        // 若无需传输数据,则直接send(GET请求).
        if (!this.isHasData()) {
            return xhr.send();
        }

        let resultData = null;
        const {data} = xhr;
        // 按数据类型进行请求(请求数据为 ForData).
        if (this.isFormData()) {
            resultData = data;
            // 普通post方法.
        } else if (this.isURLEncodedData()) {
            this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
            resultData = serializeURLEncoded(data);
            // 判断请求数据类型是否为JSON.
        } else if (this.isJSONData()) {
            this.setContentType(CONTENT_TYPE_JSON);
            resultData = serializeJSON(data);
        } else {
            // 其他请求.
            this.setContentType();
            resultData = data;
        }
        // 发送数据.
        xhr.send(resultData);
    }

    // 判断是否需要传输数据的方法.
    isHasData() {
        const {data, method} = this.options;
        if (!data) {
            return false;
        }
        return method.toLowerCase() != HTTP_GET.toLowerCase();
    }

    // 判断数据类型是否为FormData的方法.
    isFormData() {
        return this.options.data instanceof FormData;
    }

    // 判断数据类型是否为URLEncoded的方法.
    isURLEncodedData() {
        return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_FORM_URLENCODED);
    }

    // 判断数据类型是否为JSON的方法.
    isJSONData() {
        return this.options.constructor.toLowerCase().includes(CONTENT_TYPE_JSON);
    }

    // 设置Content-Type的方法.
    setContentType(contentType = this.options.contentType) {
        if (!contentType) {
            return;
        }
        this.xmr.setHeader('Content-Type', contentType);
    }

    // 获取XMLHttpRequest对象.
    getXMLHttpRequest() {
        return this.xmr;
    }
}
