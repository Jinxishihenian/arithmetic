const strategies = {
    // 非空.
    noEmpty: function (value, message) {
        if (value === '') {
            return message;
        }
    },

    // 最小长度.
    minLength: function (value, length, message) {
        if (!value || value.length < length) {
            return message;
        }
    },

    // 最大长度.
    maxLength: function (value, message) {
        if (!value || value.length > length) {
            return message;
        }
    },
}

// 创建校验器.
let Validator = function (strategies) {
    this.strategies = strategies;
    this.cache = [];
}

// 添加校验规则.
Validator.prototype.add = function (dom, rules) {
    rules.forEach((item) => {
        this.cache.push(() => {
            let value = dom.value;
            let arr = item.split(':');
            // 删除第一个值,并返回.
            let name = arr.shift();
            // ...arr 包含 规则与与条件.
            let params = [value, ...arr, item.errMsg];
            return this.strategies(name, params);
        });
    });

}

// 开始校验.
Validator.prototype.validity = function () {
    for (let i = 0, validity; validity[i++];) {
        return validity();
    }
}