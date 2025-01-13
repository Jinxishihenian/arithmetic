import {createMachine, setup} from "xstate";
// 步骤有序.
// 动作有序|无序.
// type StepsType = {
//     // 步骤.
//     [key: string]: {
//         // 子步骤.
//         children: StepsType[],
//         // 状态.
//         states: {
//             [key: string]: {
//                 // 是否运行中.
//                 running: boolean,
//                 // 动作.
//                 actions?: {
//                     // 描述.
//                     describe: string,
//                     // 行为状态.
//                     behaviorStatus: BehaviorStatus,
//                 }[],
//             },
//         },
//     },
// }
const stepMachine = setup({}).createMachine({
    id: 'steps',
    initial: '1',
    context: {
        ...step,
        currentStepId: "1",
        currentSubTaskId: "1-1",
    },
    states: {
        '1': {
            initial: '1-1',
            states: {
                '1-1': {},
                '1-2': {},
            },
        },
        '2': {
            initial: '2-1',
            states: {
                '2-1': {},
                '2-2': {},
            },
        },
    }
});

type StepsType = {
    // 步骤.
    [key: string]: {
        // 子步骤.
        children: StepsType[],
        // 状态.
        states: {
            [key: string]: {
                // 是否运行中.
                running?: boolean,
                // 动作是否有顺序.
                actionsOrderly: boolean,
                // 动作.
                actions?: {
                    // 描述.
                    describe: string,
                    // 行为状态.
                    behaviorStatus?: BehaviorStatus,
                }[],
            },
        },
    },
}
// 上下文.
const step: StepsType = {
    "1": {
        children: [
            {
                "1-1": {
                    children: [],
                    states: {
                        "未激活": {
                            running: false,
                            actionsOrderly: false,
                        },
                        "待交互": {
                            running: false,
                            actionsOrderly: false,
                        },
                        "进行中": {
                            running: true,
                            actionsOrderly: true,
                            actions: [
                                {describe: "选中留置针", behaviorStatus: BehaviorStatus.Running},
                                {describe: "选中棉签", behaviorStatus: BehaviorStatus.UnStart},
                                {describe: "选中碘伏", behaviorStatus: BehaviorStatus.UnStart},
                            ],
                        },
                        "完成": {
                            running: false,
                            actionsOrderly: false,
                        },
                        "失败": {
                            running: false,
                            actionsOrderly: false,
                        },
                    }
                }
            }
        ],
        states: {
            "未激活": {
                running: false,
                actions: [],
                actionsOrderly: false,
            },
            "待交互": {
                running: false,
                actionsOrderly: false,
            },
            "进行中": {
                running: false,
                actions: [],
                actionsOrderly: false,
            },
            "完成": {
                running: false,
                actions: [],
                actionsOrderly: false,
            },
            "失败": {
                running: false,
                actions: [],
                actionsOrderly: false,
            },
        },
    },
    "2": {
        children: [
            {
                "1-1": {
                    children: [],
                    states: {
                        "未激活": {
                            running: false,
                            actionsOrderly: true,
                        },
                        "待交互": {
                            running: false,
                            actionsOrderly: true,
                        },
                        "进行中": {
                            running: true,
                            actionsOrderly: true,
                            actions: [
                                {describe: "选中输液泵", behaviorStatus: BehaviorStatus.Running},
                                {describe: "选中输液架", behaviorStatus: BehaviorStatus.UnStart},
                            ],
                        },
                        "完成": {
                            running: false,
                            actionsOrderly: true,
                        },
                        "失败": {
                            running: false,
                            actionsOrderly: true,
                        },
                    }
                }
            }
        ],
        states: {
            "未激活": {
                running: false,
                actionsOrderly: true,
                actions: [],
            },
            "待交互": {
                running: false,
                actionsOrderly: true,
            },
            "进行中": {
                running: false,
                actionsOrderly: true,
                actions: [],
            },
            "完成": {
                running: false,
                actionsOrderly: true,
                actions: [],
            },
            "失败": {
                running: false,
                actionsOrderly: true,
                actions: [],
            },
        },
    },
    // "3": {},
}

// 消费steps的状态,控制steps的状态树.
// 当前状态.
// TODO："当前步骤-当前子步骤-当前状态"，如："1-1-进行中"，"1-1-进行中-选中留置针"，"1-1-进行中-选中棉签"，"1-1-进行中-选中碘伏"。

// TODO 物品(操作模型).
const mesh = () => {
    // 判断条件.
    // TODO 判断 1 1-1 是否在进行中且手拿取的物品.
    // 执行动作.
    // 蘸取碘伏.
    // 修改状态.
    // TODO 修改 1 1-1 进行中-选中碘伏 的状态为完成.
}

// 步骤管理器.
const stepManager = {
    currentStep: null,
    setStep: (stepId) => { /* 更新步骤逻辑 */
    },
    getNextStep: () => { /* 获取下一步骤 */
    },
};

// TODO 高亮(根据steps状态映射).
// TODO 镜头(根据steps状态映射).
// TODO 对话(根据steps状态映射).
// TODO 屏幕锁定(根据steps状态映射).
// TODO 动画(根据steps状态映射).

// 调试部分.
// 监听行为的变化.

// 操作行为.

const enum BehaviorStatus {
    // 未开始.
    UnStart,
    // 进行中.
    Running,
    // 已完成.
    Finished,
    // 已失败.
    Failed,
}

// 针对修改关闭,针对扩展开放.
const test = [];
test.push(1);