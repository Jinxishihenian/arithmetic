import {createMachine, assign, setup, createActor, SnapshotFrom} from 'xstate';

// 5.0 版本.
// 定义上下文接口.
// interface CountContext {
//     count: number;
// }
//
// type CountEvent = | { type: 'INC' } | { type: 'DEC' } | { type: 'SET', value: number };
// const demo = createMachine({
//     types: {
//         context: {} as {},
//         events: {} as { type: 'INC' | 'DEC' | 'SET', value?: number },
//     },
//     context: {
//         count: 0
//     },
//     on: {}
// })
// const countMachine = setup({
//     types: {
//         context: {} as { count: number },
//         events: {} as { type: 'INC' | 'DEC' | 'SET', value?: number }
//     },
// }).createMachine({
//     context: {
//         count: 0
//     },
//     // 位于状态机的根级别,所有状态都会被监听,并执行相应的动作.
//     on: {
//         INC: {
//             actions: assign({
//                 count: ({context}) => context.count + 1
//             })
//         },
//         DEC: {
//             actions: assign({
//                 count: ({context}) => context.count - 1
//             })
//         },
//         SET: {
//             // actions: assign({
//             //     count: ({event}) => event.value
//             // })
//             actions: () => {
//                 console.log('actions');
//             }
//         }
//     }
// });

const machine = setup({
    types: {
        context: {} as {
            message: string
        },
        events: {} as { type: "play" } | { type: "pause" },
    }
}).createMachine({
    context: {
        message: "hello"
    },
    initial: "Paused",
    states: {
        Paused: {
            //  定义了特定状态下对事件的处理逻辑,只有在该状态下，状态机才会响应这些事件.
            on: {
                play: {
                    target: "Playing"
                }
            }
        },
        Playing: {
            on: {
                pause: {
                    target: "Paused",
                },
            }
        }
    },
});

const machineActor = createActor(machine).start();
// countActor.send({type: 'INC'});
machineActor.subscribe((snapshot) => {
    console.log(snapshot);
});
machineActor.subscribe({
    next(snapshot) {
        console.log(snapshot);
    },
    error(err) {
    },
    complete() {
    },
})
// 获取xstate的快照.
// console.log('快照');
// console.log(machineActor.getSnapshot());


machineActor.send({type: 'play'});
machineActor.send({type: 'pause'});
//
// // 添加.
// machineActor.send({type: 'play'});
// // 减少.
// countActor.send({type: 'DEC'});
// // 设置.
// countActor.send({type: 'SET', value: 10});

// const textMachine = setup({
//     types: {
//         context: {} as {
//             committedValue: string,
//             value: '',
//         },
//         events: {} as { type: 'INC' | 'DEC' | 'SET', value?: number }
//     }
// }).createMachine({
//     context: {committedValue: '', value: ''},
//     initial: '',
//     states: {
//         reading: {},
//         editing: {},
//     }
// });

