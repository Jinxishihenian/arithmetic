const { SyncHook } = require('tapable');
const { toUnixPath } = require('./utils');
const path = require('path');
// compiler
// Compiler类进行核心编译实现.
class Compiler {
    constructor(options) {
        this.options = options;
        // 相对路径跟路径 Context参数.
        this.rootPath = this.options.context || toUnixPath(process.cwd())
        console.log('入口文件路径.');
        console.log(this.rootPath)
        // 创建plugin hooks
        this.hooks = {
            // 开始编译时的钩子.
            run: new SyncHook(),
            // 输出 asset 到 output 目录之前执行(写入在文件之前)
            emit: new SyncHook(),
            // 在 compilation 完成时执行,全部完成编译执行.
            done: new SyncHook(),
        }
        // 加载插件

    }

    // run方法启动编译.
    // 同时run方法接收外部传递callback
    run(callback) {
        // 当调用run方法是 出发开始编译的plugin.
        this.hooks.run.call();
        // 获取入口配置文件对象.
        const entry = this.getEntry();
    }

    // 获取入口文件路径.
    getEntry() {
        let entry = Object.create(null);
        const { entry: optionsEntry } = this.options;
        if (typeof optionsEntry === 'string') {
            entry['main'] = optionsEntry;
        } else {
            entry = optionsEntry;
        }
        // 将entry变成绝对路径.
        Object.keys(entry).forEach((key) => {
            const value = entry[key];
            // 判断是否是绝对路径.
            if (!path.isAbsolute(value)) {
                // 转换为绝对路径的同时统一路径分隔符为 / .
                entry[key] = toUnixPath(path.join(this.rootPath, value));
            }
        });
        console.log(`文件路径:${JSON.stringify(entry)}`)
        return entry;
    }
}

module.exports = Compiler;
