import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { crashReporter, logger, userPermissionMiddleware } from '../middleware';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        // 日志中间件.
        logger,
        // 异常上报中间件.
        crashReporter,
        // 权限校验中间件.
        userPermissionMiddleware,
    ),
});
