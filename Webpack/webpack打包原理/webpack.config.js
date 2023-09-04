const path = require('path');
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    module: {
        /*rules: [
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
        ],*/
        rules: [
            {
                test: /.md$/,
                use: './markdown-loader',
            }
        ],
    }
}