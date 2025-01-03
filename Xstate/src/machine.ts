import {createMachine, assign, setup} from "xstate";

// const step: StepsType = {
//     // 原始的 step 数据
// };
// 步骤状态机.
const machine = setup({}).createMachine({
    context: {
        step, // 将 `step` 数据放入 context
        currentStepId: "1", // 当前激活的步骤
        currentSubTaskId: "1-1", // 当前激活的子任务
        // 当前屏幕状态.

    },
    states: {
        "未激活": {
            on: {
                ACTIVATE: {
                    actions: "activateStep", // 激活步骤
                    target: "待交互",
                },
            },
        },
        "待交互": {
            on: {
                START: {
                    actions: "startStep",
                    target: "进行中",
                },
            },
        },
        "进行中": {
            on: {
                COMPLETE: {
                    actions: "completeStep",
                    target: "完成",
                },
                FAIL: {
                    actions: "failStep",
                    target: "失败",
                },
            },
        },
        "完成": {
            type: "final", // 最终状态
        },
        "失败": {
            type: "final",
        },
    },
}, {
    actions: {
        activateStep: assign((context, event) => {
            const {stepId} = event;
            return {
                ...context,
                currentStepId: stepId,
                step: {
                    ...context.step,
                    [stepId]: {
                        ...context.step[stepId],
                        states: {
                            ...context.step[stepId].states,
                            未激活: {
                                ...context.step[stepId].states["未激活"],
                                running: false,
                            },
                            待交互: {
                                ...context.step[stepId].states["待交互"],
                                running: true,
                            },
                        },
                    },
                },
            };
        }),
        startStep: assign((context, event) => {
            const {stepId} = event;
            return {
                ...context,
                step: {
                    ...context.step,
                    [stepId]: {
                        ...context.step[stepId],
                        states: {
                            ...context.step[stepId].states,
                            待交互: {
                                ...context.step[stepId].states["待交互"],
                                running: false,
                            },
                            进行中: {
                                ...context.step[stepId].states["进行中"],
                                running: true,
                            },
                        },
                    },
                },
            };
        }),
        completeStep: assign((context, event) => {
            const {stepId} = event;
            return {
                ...context,
                step: {
                    ...context.step,
                    [stepId]: {
                        ...context.step[stepId],
                        states: {
                            ...context.step[stepId].states,
                            进行中: {
                                ...context.step[stepId].states["进行中"],
                                running: false,
                            },
                            完成: {
                                ...context.step[stepId].states["完成"],
                                running: true,
                            },
                        },
                    },
                },
            };
        }),
        failStep: assign((context, event) => {
            const {stepId} = event;
            return {
                ...context,
                step: {
                    ...context.step,
                    [stepId]: {
                        ...context.step[stepId],
                        states: {
                            ...context.step[stepId].states,
                            进行中: {
                                ...context.step[stepId].states["进行中"],
                                running: false,
                            },
                            失败: {
                                ...context.step[stepId].states["失败"],
                                running: true,
                            },
                        },
                    },
                },
            };
        }),
    },
});

// 行为状态机.
// 主要是点击事件.

// 行为管理
const at = {
    "syb": [
        {
            action: "做某事",
            // 条件.
            group: {
                // 当前步骤.
                // ...
            },
        },
        {
            action: "做某事",
            // 条件.
            group: {
                // 当前步骤.
                // ...
            },
        },
    ],
}
// 输液泵.
const syb = async () => {
    // 判断条件
    // if(){}
    // TODO 修改context:
    // 将"棉签动作"改为进行中.
    // TODO 我需要执行结果.
    // 0.组合.
    // 1.拾取.
    // 2.镜头(根据动作).
    // 3.动画(根据动作).
    // const jg = await jh();
    // //
    // // 开始执行.
    // //  ...
    // // 根据执行结果 改为完成或失败.
    // // 修改当前node信息,跳转到下一个.
    // // 将"选中碘伏"改为待交互.
}

// 点击事件统一操作
const click = async (action: string) => {
    // 修改context;
    // 0.被命中.
    // 1.组合.
    // 2.拾取.
    // 3.镜头(根据动作).
    // 4.动画(根据动作).
    // ..操作.
    // 5.镜头(根据动作).
    // 6.结果.
    // 修改context;
    // 镜头 ---------------------------
    // 动画 ---------------------------
    // 操作 ---------------------------
}

const jh = () => {
    return new Promise((resolve, reject) => {
        resolve("成功");
    })
}

// 输液泵.
const syb1 = () => {
    // 条件.
    // 动作.
    // 条件.
    // 动作.
}

const syj1 = () => {
    // 判断条件
    // if(){}
    // 拾取(动作).

    // 判断条件
    // if(){}
    // 打开.

    // 判断条件
    // if(){}
    // 拔出.

    // 判断条件.
    // if(){}
    // 关闭.
}

// 对话确定按钮.
const an1 = () => {
}

// 动作表现层.
// 1.动画.
// 1.动画->某个表现层(模型动画,镜头动画,拾取).



