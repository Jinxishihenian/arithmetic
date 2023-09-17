const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

class MyPlugin {
    // compiler, webpack工作中最核心对象,包含webpack构建中所有的配置信息,利用该对象注册钩子函数.
    apply(compiler) {
        console.log('MyPlugin 启动');
        compiler.hooks.emit.tap('MyPlugin', compilation => {
            for (const name in compilation.assets) {
                // console.log(compilation.assets[name].source())
                if (name.endsWith('.js')) {
                    const contents = compilation.assets[name].source();
                    const withoutComment = contents.replace(/\/\*\*+\*\//g,'')
                    compilation.assets[name] = {
                        source: () => withoutComment,
                        // 文件大小.
                        size: () => withoutComment.length,
                    }
                }
            }
        });
    }
}

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            // 处理css的loader.
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            // 处理图片的loader.
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader',
            }
        ],
        /* rules: [
             {
                 test: /.md$/,
                 use: './markdown-loader',
             }
         ],*/
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new MyPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        // hot: true,
        // publicPath: '/',
        // contentBase: './public',

    }
}