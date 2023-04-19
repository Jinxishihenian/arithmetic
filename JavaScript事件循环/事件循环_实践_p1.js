let state = {};

function render() {
    console.log('啪啪啪开始渲染.');
}

function setState(ars) {
    state = {
        ...state,
        ...ars,
    };
    setTimeout(() => {
        console.log(state);
        render();
    });
}

setState({ name: 'wss' })
setState({ age: '永远18岁!' });
setState({ sex: '男' })
