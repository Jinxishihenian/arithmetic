const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');


module.exports = {
    // 项目入口文件.
    entry: ['./main.js', './index.html'],
    devServer: {
        hot: true,
        static: './',
        // contentBase: './build',
        // 开启gzip压缩.
        compress: true,
        port: 3000,
        // 自动打开浏览器.
        open: true,

    },
    // devtool: 'eval-source-map',
    // 输出.
    output: {
        // 打包后的js文件名称.
        filename: "built.js",
        // 打包输出到当前路径的build文件夹中.
        path: resolve(__dirname, 'build'),
        // 注意此处,是服务器下资源引用的根目录.
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // 将js中的css通过style方式注入到html中.
                    // 'style-loader',
                    // 加载处理css文件.'
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    postcssPresetEnv()
                                ]
                            }
                        }
                    }
                    // 'less-loader'
                ],
            },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                loader: 'url-loader',
                options: {
                    // 图片小于15kb,就会被base64处理,可以减少请求,但是体积会变大(请求速度慢)
                    limit: 15 * 1025,
                    outputPath: 'imgs'
                }
            },
            {
                // 打包其他资源.
                exclude: /\.(css|less|jpg|png|jpeg|gif|html|js)$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'resource'
                }
            }
        ]
    },
    // 插件配置.
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            // 重命名输出的css文件.
            filename: 'index.css',
        })

    ],
    // 开发模式.
    mode: 'development'
}