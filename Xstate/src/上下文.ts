
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

// 状态机上下文.
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