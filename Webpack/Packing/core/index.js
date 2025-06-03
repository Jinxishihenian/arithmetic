// console.log(process.argv.slice.js(2));
// server.js
const webpack = require('./webpack');
const config = require('../example/webpack.config');
// 步骤1:初始化参数 根据配置文件和shell参数合成参数.
const compiler = webpack(config);
// 调用run方法进行打包.
// console.log(compiler);
compiler.run((err, stats) => {
    if (err) {
        console.log(err, 'err')
    }
})