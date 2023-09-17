class PluginB {
    apply(compiler) {
        compiler.hooks.done.tap('Plugin B', () => {
            console.log('PluginB');
        })
    }
}

module.exports = PluginB