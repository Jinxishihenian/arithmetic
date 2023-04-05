// 数据转换以及url处理.
// 将请求对象序列化成URLEncode格式化的字符串.
const serializeURLEncoded = param => {
    const result = [];

    for (const [key, value] of Object.entries(param)) {
        result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    return result.join('&');
}

// 将请求对象序列化成json.
const serializeJSON = param => {
    return JSON.stringify(param);
}

// 获取合法格式的参数字符串.
const addURLData = (url, data) => {
    if (!data) {
        return '';
    }
    let mark = url.includes('?') ? '?' : '&';
    return `${mark}${data}`;
}
export {serializeJSON, addURLData, serializeURLEncoded}