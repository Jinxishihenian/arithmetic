const steps = {
    "1": {
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
                                {describe: "选中留置针", behaviorStatus: BehaviorStatus.Running},
                                {describe: "选中棉签", behaviorStatus: BehaviorStatus.UnStart},
                                {describe: "选中碘伏", behaviorStatus: BehaviorStatus.UnStart},
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

// 当前状态.
// TODO："当前步骤-当前子步骤-当前状态"，如："1-1-进行中"，"1-1-进行中-选中留置针"，"1-1-进行中-选中棉签"，"1-1-进行中-选中碘伏"。

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