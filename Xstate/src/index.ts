import {createMachine, assign, createActor} from 'xstate';

// 定义上下文接口.
interface CountContext {
    count: number;
}

type CountEvent = | { type: 'INC' } | { type: 'DEC' } | { type: 'SET', value: number };


const countMachine = createMachine<CountContext, CountEvent>({
    context: {
        count: 0
    },
    on: {
        INC: {
            // actions: assign({count: (context: CountContext, _): number => context.count + 1}),
            actions: () => {
                //     assign({count: (context: CountContext, _): number => context.count + 1});
            }
        },
        DEC: {
            actions: () => {
            },
        },
        SET: {
            actions: () => {
            },
        },
    }
});

const countActor = createActor(countMachine).start();
countActor.subscribe((state) => {
    console.log(state.context.count);
});

countActor.send({type: 'INC'});