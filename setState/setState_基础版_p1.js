class Component {
    constructor(props) {
        this.state = {};
        this.pendingState = null;
    }

    setState(partialState) {
        if (this.pendingState === null) {
            // 如果没有待处理的状态更新，则将当前状态和传入的部分状态合并
            this.pendingState = {
                ...this.state,
                ...partialState
            };
        } else {
            // 如果有待处理的状态更新，则将传入的部分状态合并到待处理状态中
            this.pendingState = {
                ...this.pendingState,
                ...partialState
            };
        }
        // 在下一个事件循环周期内执行实际的状态更新操作
        setTimeout(() => {
            this.state = this.pendingState;
            this.pendingState = null;
            console.log(this.state);
            this.render();
        }, 0);
    }

    render() {
        // 实现组件的渲染
    }
}

const ReactDemo = new Component()
ReactDemo.setState({ name: 'wss' });
ReactDemo.pendingState = { task: '结婚生子' }
ReactDemo.setState({ age: '14' });
ReactDemo.pendingState = { sex: '男' }


