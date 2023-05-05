// 中间件示例.
/**
 * 打印每个 dispatch 的 action 和调用后的状态日志
 */
export const logger = store => next => action => {
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
export const crashReporter = store => next => action => {
    try {
        return next(action)
    } catch (err) {
        console.error('Caught an exception!', err)
        // TODO 做些异常上报，发送到服务器.
        /*Raven.captureException(err, {
            extra: {
                action,
                state: store.getState()
            }
        })*/
        throw err
    }
}