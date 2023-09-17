// import createHeading from './heading.js'
import createEditor from './editor'
import background from './ling_xg.jpg';

// const heading = createHeading();
const editor = createEditor();
document.body.appendChild(editor)
// import about from './about.md'

const img = new Image();
img.src = background;
// document.body.appendChild(img);
const lastEditor = editor;
// 热更新逻辑.
module.hot.accept('./editor', () => {
    document.body.removeChild(lastEditor);
    const _editor = createEditor();
    _editor.innerText = lastEditor.innerText;
    document.body.appendChild(_editor)
});