const Compiler = require('./compiler');

function webpack(options) {
    // 合并参数得到合并后的参数 mergeOptions.
    const mergeOptions = _mergeOptions(options);
    // 创建compiler对象.
    const compiler = new Compiler(mergeOptions);
    // 加载插件.
    _loadPlugin(options.plugins, compiler);

    return compiler;
}

// 合并shell中的参数.
function _mergeOptions(options) {
    const shellOptions = process.argv.slice(2).reduce((option, argv) => {
        // argv -> --mode=production
        const [key, value] = argv.split('-');
        if (key && value) {
            const parseKey = key.split(2);
            option[parseKey] = value;
        }
        return option;
    }, {});
    return { ...options, ...shellOptions };
}

// 加载插件函数.
function _loadPlugin(plugins, compiler) {
    if (plugins && Array.isArray(plugins)) {
        plugins.forEach((plugin) => {
            // 因为apply内部有注册事件函数.
            plugin.apply(compiler);
        })
    }
}

module.exports = webpack;