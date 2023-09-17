const path = require('path');
const PluginA = require('../plugins/plugin-a');
const PluginB = require('../plugins/plugin-b');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/entry1.js'),
        second: path.resolve(__dirname, './src/entry2.js'),
    },
    devtool: false,
    context: process.cwd(),
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js',
    },
    plugins: [
        new PluginA(),
        new PluginB()
    ],
    resolve: {
        extensions: ['.js', '.ts'],
    },
    module: {
        test: /\.js/,
        use: [
            // 使用自己loader有三种方式,这里仅仅是一种.

        ],
    },
}