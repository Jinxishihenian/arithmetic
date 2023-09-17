import './editor.css'

export default () => {
    const editorElement = document.createElement('div')
    editorElement.contentEditable = true;
    editorElement.clssName = 'editor';
    // console.log('editor init completed11111111');
    alert('1234');
    return editorElement;
}