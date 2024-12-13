import {createMachine, assign, setup, createActor, SnapshotFrom, waitFor, interpret} from 'xstate';


const machine = setup({
    types: {
        context: {} as {},
        events: {} as { type: 'FETCH' },
    },
}).createMachine({
    context: {},
    id: 'fetch',
    initial: 'idle',
    states: {
        idle: {
            on: {
                FETCH: 'loading',
            },
        },
        loading: {
            after: {
                2000: 'success',
            },
        },
        success: {
            on: {},
        },
    },
})
const service = createActor(machine).start();
// 判断1.
waitFor(service, (snapshot) => snapshot.matches('loading')).then(() => {
    console.log('数据加载中');
});
// 判断2.
// waitFor(service, (snapshot) => {
//     return snapshot.context.count >= 10
// }).then(() => {
//     console.log('数据加载中');
// });
// 触发加载.
service.send({type: 'FETCH'});