const presets = [
    ['@babel/env', {
        debug: true,
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
            // chrome: '58',
        },
    }]
];
const plugins = [
    [
        '@babel/plugin-transform-runtime'
    ]
];
if (process.env["ENV"] === "prod") {
    plugins.push([]);
}

module.exports = { presets, plugins }