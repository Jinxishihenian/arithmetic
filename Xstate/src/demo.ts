// 步骤有序.
// 动作有序|无序.
const steps = {
    "1": {
        children: [
            {
                "1-1": {
                    children: [],
                    states: {
                        "未激活": {
                            running: false,
                            orderly: false,
                        },
                        "待交互": {
                            running: false,
                            orderly: false,
                        },
                        "进行中": {
                            running: true,
                            orderly: true,
                            actions: [
                                {describe: "选中留置针", behaviorStatus: BehaviorStatus.Running},
                                {describe: "选中棉签", behaviorStatus: BehaviorStatus.UnStart},
                                {describe: "选中碘伏", behaviorStatus: BehaviorStatus.UnStart},
                            ],
                        },
                        "完成": {
                            running: false,
                            orderly: false,
                        },
                        "失败": {
                            running: false,
                            orderly: false,
                        },
                    }
                }
            }
        ],
        states: {
            "未激活": {
                running: false,
                actions: [],
            },
            "待交互": {
                running: false,
            },
            "进行中": {
                running: false,
                actions: [],
            },
            "完成": {
                running: false,
                actions: [],
            },
            "失败": {
                running: false,
                actions: [],
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
                        },
                        "待交互": {
                            running: false,
                        },
                        "进行中": {
                            running: true,
                            actions: [
                                {describe: "选中输液泵", behaviorStatus: BehaviorStatus.Running},
                                {describe: "选中输液架", behaviorStatus: BehaviorStatus.UnStart},
                            ],
                        },
                        "完成": {
                            running: false,
                        },
                        "失败": {
                            running: false,
                        },
                    }
                }
            }
        ],
        states: {
            "未激活": {
                running: false,
                actions: [],
            },
            "待交互": {
                running: false,
            },
            "进行中": {
                running: false,
                actions: [],
            },
            "完成": {
                running: false,
                actions: [],
            },
            "失败": {
                running: false,
                actions: [],
            },
        },
    },
    "3": {},
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