# Redux分享会

### Redux解决了什么问题

#### 状态管理

> Redux 提供了一个全局的存储库，用于存储应用程序的状态。



#### 状态可预测性

> 在 Redux 中，状态是只读的，不能直接修改。在 Redux 中，每个操作都是明确的，因此您可以轻松地跟踪状态的更改并调试应用程序。



#### UI与状态的解耦

> UI 与状态的解耦是指将 UI 组件与状态数据分离，使得组件不依赖于状态数据的具体实现方式。在 Redux 中，状态数据存储在一个全局的存储库中，而 UI 组件则通过订阅状态来获取和响应状态的更改。这种解耦方式使得组件不必关心状态数据的来源和具体实现方式，从而使得组件更加灵活和可复用。



#### 易于测试

> 1.方便写测试用例
>
> 2.Redux 提供了一些工具来帮助您调试应用程序。例如，您可以使用 Redux DevTools 来查看应用程序状态的历史记录和更改





### Redux是什么

#### Redux概述

> Redux 是 JavaScript 应用的状态容器，提供可预测的状态管理.Redux 是一个使用叫作 "actions" 的事件去管理和更新应用状态的模式和工具库。 它以集中式 Store（centralized store）的方式对整个应用中使用的状态进行集中管理，其规则确保状态只能以可预测的方式更新。

#### 为什么要用Redux

> Redux 提供的模式和工具使你更容易理解应用程序中的状态何时、何地、为什么以及如何更新，以及当这些更改发生时你的应用程序逻辑将如何表现。 Redux 指导你编写可预测和可测试的代码，这有助于让你确信你的应用程序将按预期工作。



### Redux如何使用

#### 四大术语

##### Action

> action 是一个具有 type 字段的普通 JavaScript 对象。你可以将 action 视为描述应用程序中发生了什么的事件.
>
> type 字段是一个字符串，给这个 action 一个描述性的名字，比如"todos/todoAdded"。我们通常把那个类型的字符串写成“域/事件名称”，其中第一部分是这个 action 所属的特征或类别，第二部分是发生的具体事情。
>
> action 对象可以有其他字段，其中包含有关发生的事情的附加信息。按照惯例，我们将该信息放在名为 payload 的字段中。
>
> 一个典型的 action 对象可能如下所示

```javascript
const addTodoAction = {
  type: 'todos/todoAdded',
  payload: 'Buy milk'
}
```

##### Reducers

> reducer 是一个函数，接收当前的 `state` 和一个 `action` 对象，必要时决定如何更新状态，并返回新状态。函数签名是：`(state, action) => newState`。 你可以将 reducer 视为一个事件监听器，它根据接收到的 action（事件）类型处理事件.
>
> Reducer 必需符合以下规则：
>
> - 仅使用 `state` 和 `action` 参数计算新的状态值
> - 禁止直接修改 `state`。必须通过复制现有的 `state` 并对复制的值进行更改的方式来做 *不可变更新（immutable updates）*。
> - 禁止任何异步逻辑、依赖随机值或导致其他“副作用”的代码
>
> 下面是 reducer 的小例子，展示了每个 reducer 应该遵循的步骤：

```js
const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
  // 检查 reducer 是否关心这个 action
  if (action.type === 'counter/increment') {
    // 如果是，复制 `state`
    return {
      ...state,
      // 使用新值更新 state 副本
      value: state.value + 1
    }
  }
  // 返回原来的 state 不变
  return state
}
```

##### Store

> Redux 应用的状态存在于一个名为 store 的对象中.
>
> store 是通过传入一个 reducer 来创建的，并且有一个名为 `getState` 的方法，它返回当前状态值：

```js
const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
```

##### Dispatch

> Redux store 有一个方法叫 `dispatch`。更新 state 的唯一方法是调用 store.dispatch() 并传入一个 action 对象。 store 将执行所有 reducer 函数并计算出更新后的 state，调用 `getState()` 可以获取新 state。

```js
store.dispatch({ type: 'counter/incremented' })

console.log(store.getState())
// {value: 1}
```



#### 核心概念和原则

- 单一数据源

> 应用程序的全局状态作为对象存储在单个 store 中。任何给定的数据片段都应仅存在于一个位置，而不是在许多位置重复。
>
> 这样，随着事物的变化，可以更轻松地调试和检查应用的状态，并集中需要与整个应用程序交互的逻辑。

- State 是只读的

> 更改状态的唯一方法是 dispatch 一个 action，这是一个描述所发生事件的对象。
>
> 这样，UI 就不会意外覆盖数据，并且更容易跟踪发生状态更新的原因。由于 actions 是普通的 JS 对象，因此可以记录、序列化、存储这些操作，并在以后重放这些操作以进行调试或测试。

- 使用 Reducer 纯函数进行更改

> 若要指定如何基于 action 更新状态树，请编写 reducer 函数。Reducers 是纯函数，它接收旧 state 和 action，并返回新 state。与任何其他函数一样，你可以将 Reducer 拆分为较小的函数以帮助完成工作，或者为常见任务编写可重用的 Reducer。



#### Redux数据流

> 早些时候，我们谈到了“单向数据流”，它描述了更新应用程序的以下步骤序列：
>
> - State 描述了应用程序在特定时间点的状况
> - 基于 state 来渲染视图
> - 当发生某些事情时（例如用户单击按钮），state 会根据发生的事情进行更新
> - 基于新的 state 重新渲染视图
>
> 具体来说，对于 Redux，我们可以将这些步骤分解为更详细的内容：
>
> - 初始启动：
>   - 使用最顶层的 root reducer 函数创建 Redux store
>   - store 调用一次 root reducer，并将返回值保存为它的初始 `state`
>   - 当视图 首次渲染时，视图组件访问 Redux store 的当前 state，并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他们可以知道 state 是否已更改。
> - 更新环节：
>   - 应用程序中发生了某些事情，例如用户单击按钮
>   - dispatch 一个 action 到 Redux store，例如 `dispatch({type: 'counter/increment'})`
>   - store 用之前的 `state` 和当前的 `action` 再次运行 reducer 函数，并将返回值保存为新的 `state`
>   - store 通知所有订阅过的视图，通知它们 store 发生更新
>   - 每个订阅过 store 数据的视图 组件都会检查它们需要的 state 部分是否被更新。
>   - 发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页
>
> 动画的方式来表达数据流更新：

![ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26](C:\Users\Administrator\Desktop\redux-分享会\ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)

#### Redux基础示例

[完整示例](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla?from-embed=&file=/index.html:1713-1715)

代码片段：

```
// 1) 使用 `createStore` 函数创建 Redux store
const store = Redux.createStore(counterReducer)

// 2) 订阅更新（以便将来数据更改时能够重绘）
store.subscribe(render)

// 我们的“用户界面”是单个 HTML 元素中的一些文本
const valueEl = document.getElementById('value')

// 3) 当订阅回调函数运行时：
function render() {
  // 3.1) 获取当前 store 的 state
  const state = store.getState()
  // 3.2) 提取你想要的数据
  const newValue = state.value.toString()

  // 3.3) 使用新值更新 UI
  valueEl.innerHTML = newValue
}

// 4) 使用初始 state 渲染 UI
render()

// 5) 基于 UI 输入 dispatch action
document.getElementById('increment').addEventListener('click', function () {
  store.dispatch({ type: 'counter/incremented' })
})
```



#### Middleware

> Enhancers 非常强大，因为其可以覆盖或替换 store 的任何方法：dispatch、getState 和 subscribe。
>
> 但是，很多时候，我们只需要自定义 dispatch 的行为方式。 如果有一种方法可以在 dispatch运行时添加一些自定义行为，那就太好了。
>
> Redux 使用一种称为 middleware的特殊插件来让我们自定义dispatch 函数。Redux middleware 解决的问题与 Express 或 Koa middleware 不同，但在概念上是相似的。它在 dispatch action 的时候和 action 到达 reducer 那一刻之间提供了三方的逻辑拓展点。
>
> - Redux middleware 进行日志记录.
> - 故障监控上报 .
> - 异步 API 通信.
> - 路由.
> - ......

```js
/**
 * 打印每个 dispatch 的 action 和调用后的状态日志
 */
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

/**
 * 报错的时候发送异常报告
 */
const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    })
    throw err
  }
}

import { createStore, combineReducers, applyMiddleware } from 'redux'

// 以下是如何将其应用于 Redux store 的例子：
const todoApp = combineReducers(reducers)
const store = createStore(
  todoApp,
  // applyMiddleware() 告诉 createStore() 如何处理 middlewares
  applyMiddleware(logger, crashReporter)
)
```



#### 异步逻辑和数据获取

##### 使用 Middleware 处理异步逻辑

> 就其本身而言，Redux store 对异步逻辑一无所知。它只知道如何同步 dispatch action，通过调用 root reducer 函数更新状态，并通知 UI 某些事情发生了变化。任何异步都必须发生在 store 之外。
>
> 最常见的异步 middleware 是 redux-thunk，它可以让你编写可能直接包含异步逻辑的普通函数。Redux Toolkit 的 configureStore 功能默认自动设置 thunk middleware，我们推荐使用 thunk 作为 Redux 开发异步逻辑的标准方式。
>
> 当引入异步逻辑时，我们添加了一个额外的步骤，middleware 可以运行像 AJAX 请求这样的逻辑，然后 dispatch action。这使得异步数据流看起来像这样：

![ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80](E:\project\arithmetic\redux-分享会\ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)

##### Thunk函数

>“thunk” 这个词是一个编程术语，意思是 "一段做延迟工作的代码".
> 将 thunk middleware 添加到 Redux store 后，它允许你将 thunk 函数 直接传递给 store.dispatch.调用 thunk 函数时总是将 (dispatch, getState) 作为它的参数，你可以根据需要在 thunk 中使用它们.

```js
const logAndAdd = amount => {
  return (dispatch, getState) => {
    const stateBefore = getState()
    console.log(`Counter before: ${stateBefore.counter}`)
    dispatch(incrementByAmount(amount))
    const stateAfter = getState()
    console.log(`Counter after: ${stateAfter.counter}`)
  }
}
```

### Redux最佳实践

#### Redux Toolkit

##### 1.创建Redux Store

```js
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {}
})
```

##### 2.为 React 提供 Redux Store

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

##### 3.创建 Redux State Slice

> "slice"可以理解为将整个Redux store的状态进行切片，分割成不同的部分，每个部分只负责管理自己的状态。这样做的好处是可以避免整个Redux store变得过于庞大和不可维护，同时提高代码的可读性和可维护性。

```js
import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

##### 4.将 Slice Reducers 添加到 Store 中

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

##### 5.在 React 组件中使用 Redux 状态和操作

```js
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
```

##### Redux演示

[完整的计数器应用示例](https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed)

### RTK Query

[上链接](https://cn.redux.js.org/tutorials/essentials/part-7-rtk-query-basics)

[完整示例](https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/checkpoint-5-createApi/?from-embed=&file=/src/features/posts/PostsList.js:1269-1282)

### Redux DevTools

> Redux 专门设计用于更容易理解你的 state 何时、何地、为何以及如何随时间变化

包含本地示例.

#### 官方demo

[Redux-Toolkit(完整的计数器应用示例)](https://codesandbox.io/s/github/reduxjs/redux-essentials-counter-example/tree/master/?from-embed)

[Redux最小实现]()

[Redux基础版本](https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/counter-vanilla?from-embed)

[RTK Query](https://codesandbox.io/s/github/reduxjs/redux-toolkit/tree/master/examples/query/react/basic?from-embed=&file=/src/App.tsx)



