// <div class="father">
//     <p>
//         father
//     </p>
//     <iframe>
//     </iframe>
// </div>

/// 获取iframe内的节点.
window.onload = getIframeDom;

function getIframeDom() {
    var iframeDom = document.getElementsByTagName("iframe")[0].contentWindow.document;
    console.log(iframeDom);
}

/// iframe获取父节点.
function getFatherFrameDom() {
    // js在iframe子页面操作父页面代码(不可在本页实验).
    var fatherIframeDome = window.parent.document.getElementById("xx");
}
 