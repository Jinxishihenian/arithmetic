# Redux分享会

### Redux解决了什么问题

- 状态管理

> Redux 提供了一个全局的存储库，用于存储应用程序的状态。



- 状态可预测性

> 在 Redux 中，状态是只读的，不能直接修改。在 Redux 中，每个操作都是明确的，因此您可以轻松地跟踪状态的更改并调试应用程序。



- UI与状态的解耦

> UI 与状态的解耦是指将 UI 组件与状态数据分离，使得组件不依赖于状态数据的具体实现方式。
> 在 Redux 中，状态数据存储在一个全局的存储库中，而 UI 组件则通过订阅状态来获取和响应状态的更改。这种解耦方式使得组件不必关心状态数据的来源和具体实现方式，从而使得组件更加灵活和可复用。
>
> 使用Redux对React的UI和state进行解耦合，主要是将组件的状态（state）和行为（action）从UI组件中抽离出来，统一管理，使得组件的开发和维护更加方便和灵活。这样做的好处是，可以将组件的状态和行为从组件本身中解耦出来，使得组件更加独立，复用性更高，可维护性也更好。
>
> 虽然UI组件在使用Redux后仍然需要依赖state，但是它们不再直接管理和维护state的变化，而是通过Redux的机制来管理state的变化，并通过props将state和action传递给UI组件。这样做可以使得UI组件不再关心state的具体实现细节，只需要根据props中的数据来渲染UI即可，从而实现了UI和state的解耦合。
>
> 总之，使用Redux对React的UI和state进行解耦合，可以使得组件更加独立、复用性更高、可维护性更好，同时也可以提高代码的可测试性和可靠性。



- 易于测试

> 1.方便写测试用例.
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

```js
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

##### Middleware简介

> Redux 使用一种称为 middleware 的特殊插件来让我们自定义 dispatch 函数。 如果你曾经使用过 Express 或 Koa 之类的库，那么你可能已经熟悉添加 middleware 来自定义行为的想法。在这些框架中，middleware 是你可以放置在接收请求和生成响应之间的一些代码。例如，Express 或 Koa middleware 可能会添加 CORS 标头、日志记录、压缩等。middleware 的最大特点是它可以组合成一个链。你可以在单个项目中使用多个独立的第三方 middleware。 Redux middleware 解决了与 Express 或 Koa middleware 不同的问题，但在概念上是以相似的方式。Redux middleware 在 dispatch action 和到达 reducer 之间提供第三方扩展点。
>
>  人们使用 Redux middleware 进行日志记录、崩溃报告、异步 API 通信、路由等。 首先，我们将了解如何将 middleware 添加到 store 中，然后将展示如何编写自己的 middleware。

##### 使用Middleware

> 你可以使用 store enhancers 自定义 Redux store。Redux Middleware 实际上是在 Redux 内置的一个非常特殊的 store enhancer 之上实现的，称为 applyMiddleware。 由于我们已经知道如何将 enhancers 添加到 store，现在应该能够做到这一点。我们将从 applyMiddleware 本身开始，将添加三个已包含在此项目中的示例 middleware。

```jsx
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { print1, print2, print3 } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)

// 将 enhancer 为第二参数，因为没有 preloadedState
const store = createStore(rootReducer, middlewareEnhancer)

export default store
```

#### Thunk函数
##### Thunk简介

> **编程中的Thunk**
>
> thunk 这个词是一个编程术语，意思是 "一段做延迟工作的代码"（thunk中的“延迟”指的是将代码的执行延迟到某些条件满足后再执行，通常用于处理异步操作）.
>
> **Redux中的Thunk**
>
> 具体对于 Redux，“thunks”是一种编写函数的模式，其中包含可以与 Redux storedispatch和getStatemethods交互的逻辑.
>
> Thunk 是在 Redux 应用程序中编写异步逻辑的标准方法，通常用于数据获取.但是，它们可以用于各种任务，并且可以同时包含同步和异步逻辑。



##### 为什么使用 Thunk

因为Thunks具备以下特点:

- Thunk 允许我们编写与 UI 层分开的额外的 Redux 相关逻辑.

-  Redux reducer不得包含副作用，但实际应用程序需要具有副作用的逻辑。Thunks（和其他 Redux 中间件）为我们提供了放置这些副作用的地方.

具有该特点之后有什么好处:

- 尽可能多的逻辑移到 UI 层之外。这样做可以提高逻辑的可测试性，使 UI 层尽可能薄和“表现”，或者提高代码重用和共享.

- 您可以在其中编写任何需要与 Redux 存储交互的代码，提前进行，而无需知道将使用哪个Redux 存储。这可以防止逻辑绑定到任何特定的 Redux 存储实例并使其可重用.



##### 如何使用Thunk

1.首先使用 thunk 需要将redux-thunk中间件作为其配置的一部分添加到 Redux 存储中,将 thunk middleware 添加到 Redux store 后,它允许你将 thunk 函数直接传递给store.dispatch.

```

```

2.调用 thunk 函数时总是将 (dispatch, getState) 作为它的参数，你可以根据需要在 thunk 中使用它们.thunk函数是一个接受两个参数的函数：Redux storedispatch方法和 Redux storegetState方法。Thunk 函数不直接由应用程序代码调用。相反，它们被传递给store.dispatch().thunk 函数可以包含任意逻辑、同步或异步，并且可以随时调用dispatch或调用getState. 

```js
// 调度 thunk 函数
const thunkFunction = (dispatch, getState) => {
  // logic here that can dispatch actions or read state
}

store.dispatch(thunkFunction)
```

3.就像 Redux 代码通常使用action creators 来生成用于调度的 action 对象而不是手动编写 action 对象一样，我们通常使用thunk action creators来生成被调度的 thunk 函数.

```js
// fetchTodoById is the "thunk action creator"
export function fetchTodoById(todoId) {
  // fetchTodoByIdThunk is the "thunk function"
  return async function fetchTodoByIdThunk(dispatch, getState) {
    const response = await client.get(`/fakeApi/todo/${todoId}`)
    dispatch(todosLoaded(response.todos))
  }
}

function TodoComponent({ todoId }) {
  const dispatch = useDispatch()

  const onFetchClicked = () => {
    // Calls the thunk action creator, and passes the thunk function to dispatch
    dispatch(fetchTodoById(todoId))
  }
}
```



##### 常见用法

- 将复杂的逻辑移出组件

- 发出异步请求或其他异步逻辑

- 编写需要连续或随时间分派多个操作的逻辑

- 编写需要访问以getState做出决策或在操作中包含其他状态值的逻辑



#### 异步逻辑和数据获取

##### 如何进行异步数据请求

> 就其本身而言，Redux store 对异步逻辑一无所知。它只知道如何同步 dispatch action，通过调用 root reducer 函数更新状态，并通知 UI 某些事情发生了变化。任何异步都必须发生在 store 之外。
>
> 最常见的异步 middleware 是 redux-thunk，它可以让你编写可能直接包含异步逻辑的普通函数。Redux Toolkit 的 configureStore 功能默认自动设置 thunk middleware，我们推荐使用 thunk 作为 Redux 开发异步逻辑的标准方式。

##### **具体步骤**

- Redux 有多种异步 middleware，每一种都允许你使用不同的语法编写逻辑。最常见的异步 middleware 是 redux-thunk，它可以让你编写可能直接包含异步逻辑的普通函数。
- 编写 async thunk 的代码

```js
const getRepoDetailsStarted = () => ({
  type: 'repoDetails/fetchStarted'
})
const getRepoDetailsSuccess = repoDetails => ({
  type: 'repoDetails/fetchSucceeded',
  payload: repoDetails
})
const getRepoDetailsFailed = error => ({
  type: 'repoDetails/fetchFailed',
  error
})
const fetchIssuesCount = (org, repo) => async dispatch => {
  dispatch(getRepoDetailsStarted())
  try {
    const repoDetails = await getRepoDetails(org, repo)
    dispatch(getRepoDetailsSuccess(repoDetails))
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
  }
}
```

##### 流程解析

> 当引入异步逻辑时，我们添加了一个额外的步骤，middleware 可以运行像 AJAX 请求这样的逻辑，然后 dispatch action。这使得异步数据流看起来像这样：

![ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80](E:\project\arithmetic\redux-分享会\ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif)

典型的 async thunk 的代码

```js
const getRepoDetailsStarted = () => ({
  type: 'repoDetails/fetchStarted'
})
const getRepoDetailsSuccess = repoDetails => ({
  type: 'repoDetails/fetchSucceeded',
  payload: repoDetails
})
const getRepoDetailsFailed = error => ({
  type: 'repoDetails/fetchFailed',
  error
})
const fetchIssuesCount = (org, repo) => async dispatch => {
  dispatch(getRepoDetailsStarted())
  try {
    const repoDetails = await getRepoDetails(org, repo)
    dispatch(getRepoDetailsSuccess(repoDetails))
  } catch (err) {
    dispatch(getRepoDetailsFailed(err.toString()))
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

```jsx
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



