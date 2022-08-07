const canvasElement = document.getElementsByClassName('canvas')[0];

const fileElement = document.getElementsByClassName('file')[0];
// 绑定监听.
fileElement.addEventListener('change', (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    fileRender.readAsDataURL(file);
});
// img外层容器.
const imgContainer = document.getElementsByClassName('img-container')[0];

// img压缩结果容器.
const imgCompressResult = document.getElementsByClassName('img-compress-result')[0];

// 获取画布上下文.
const ctx = canvasElement.getContext('2d');

// 创建imgDom.
const imgDom = document.createElement("img");

let fileRender = new FileReader();

fileRender.onload = function (evt) {
    imgDom.src = evt.target.result;
    imgContainer.append(imgDom);
    let plotting;
    // 绘制到canvas上.
    // onLoad是异步的.
    imgDom.onload = function () {
        plotting = this.width / this.height;
        console.log('比例尺', plotting);
        // 按照宽适配.
        // 已经绘制到画布中.
        ctx.drawImage(
            imgDom,
            0,
            0,
            200,
            200 / plotting,
        );

        // 开始压缩.
        // 压缩一半.
        let imgBase64 = canvasElement.toDataURL('image/jpeg', 0.5);
        let imgDomResult = document.createElement('img');
        let hint = document.createElement('h3');
        imgDomResult.src = imgBase64;
        hint.innerText = "压缩结果";
        // 压缩结果显示.
        imgCompressResult.append(imgDomResult, hint);
    }
}



