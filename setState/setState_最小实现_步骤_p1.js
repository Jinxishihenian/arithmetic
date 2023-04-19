// 最小实现版本.
/*class Component {
    constructor(props) {
        this.state = {}
    }

    setState(partialState) {
        this.state = {
            ...this.state,
            ...partialState,
        }
        this.render();
    }

    render() {
        // 实现组件渲染.
        console.log('啪啪啪开始进行渲染!');
    };
}

const ReactComponent = new Component();
ReactComponent.setState({ name: "wss" });
ReactComponent.setState({ age: 2 });
ReactComponent.setState({ sex: "男" });
console.log(ReactComponent.state)*/

// setState批处理版本.
class Component {
    constructor(props) {
        this.state = {};
        this.pendingState = null;
    }

    setState(partialState) {
        if (this.pendingState === null) {
            // 如果没有待处理的状态更新,则当前状态和转入的部分状态合并.
            this.pendingState = {
                ...this.state,
                ...partialState,
            }
        } else {
            // 如果有等待处理的状态更新，则将传入的部分状态合并到待处理状态中.
            // TODO 无法理解该处修改为什么要进行合并,与上述代码的不同.
            this.pendingState = {
                ...this.pendingState,
                ...partialState,
            }
        }
        // 在下一个事件循环周期内执行事件的状态更新操作(宏任务).
        setTimeout(() => {
            this.state = this.pendingState;
            this.pendingState = null;
            this.render();
        }, 0)
    }

    render() {
        console.log('啪啪啪开始进行渲染')
    }
}

const reactComponent = new Component();
reactComponent.setState({ name: 'wss' });
reactComponent.setState({ sex: '男' });
reactComponent.setState({ sag: '18岁' });