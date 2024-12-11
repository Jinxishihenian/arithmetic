import {createMachine, assign, setup, createActor} from 'xstate';

// 定义上下文接口.
// interface CountContext {
//     count: number;
// }
//
// type CountEvent = | { type: 'INC' } | { type: 'DEC' } | { type: 'SET', value: number };


const countMachine = setup({
    types: {
        context: {} as { count: number },
        events: {} as { type: 'INC' | 'DEC' | 'SET', value?: number }
    },
}).createMachine({
    context: {
        count: 0
    },
    // 位于状态机的根级别,所有状态都会被监听,并执行相应的动作.
    on: {
        INC: {
            actions: assign({
                count: ({context}) => context.count + 1
            })
        },
        DEC: {
            actions: assign({
                count: ({context}) => context.count - 1
            })
        },
        SET: {
            // actions: assign({
            //     count: ({event}) => event.value
            // })
            actions: () => {
                console.log('actions');
            }
        }
    }
});

const machine = setup({
    types: {
        context: {} as {},
        events: {} as { type: "play" } | { type: "pause" },
    }
}).createMachine({
    context: {},
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

// const countActor = createActor(countMachine).start();
// countActor.subscribe((state) => {
//     console.log(state.context.count);
// });
//
// // 添加.
// countActor.send({type: 'INC'});
// // 减少.
// countActor.send({type: 'DEC'});
// // 设置.
// countActor.send({type: 'SET', value: 10});
