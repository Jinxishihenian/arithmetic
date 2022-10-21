import './src/index.css'
import a from './src/static/15.png'
import b from './src/static/641.png'
import print from './src/print';

if (module.hot) {
    module.hot.accept('./src/print.js', () => {
        // 方法会监听js文件的变化,执行回调函数.
        console.log('xxx');
    })
}