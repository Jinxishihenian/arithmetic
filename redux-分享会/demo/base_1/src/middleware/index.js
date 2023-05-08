// 中间件demo.
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

/**
 * 中间件用于用户操作的权限判断.
 */
export const userPermissionMiddleware = (store) => (next) => (action) => {
    // const { user } = store.getState().auth;// 获取用户信息.
    const authList = ['decrement', 'increment'];
    // 获取action中定义的需要的权限.
    const { requiredPermission } = action?.payload?.meta || {};

    if (requiredPermission && !authList.includes(requiredPermission)) {
        // 如果用户没有权限，则拦截action并返回错误.
        return Promise.reject(new Error('您没有此操作的权限'));
    }
    return next(action);
}