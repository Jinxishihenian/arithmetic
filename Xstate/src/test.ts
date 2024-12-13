// 伪代码:
// 当前状态(当前肯定只有唯一一个状态(进行中状态)).
// 所有状态(被记录).
const currentState = {step: "1-2", state: "进行中"};
// 步骤状态.
// 1.未开始
// 2.预进行
// 3.进行中
// 4.完成
// 5.失败
// 步骤状态机.
const step = {
    "1": {
        child: {
            // 点击棉签,蘸取吉尔碘,消毒留置针.
            "1-1": {
                child: {
                    // 拾起.
                    "1-1-1": {},
                },
                state: "进行中",
            },
            "1-2": {
                child: {},
                state: "未开始",
            },
        },
        state: "进行中",
    },
    "2": {
        child: {
            "2-1": {
                child: {},
                state: "未开始",
            },
            "2-2": {
                child: {},
                state: "未开始",
            },
        },
        state: "未开始",
    }
}

// 物品状态机.
// 棉签
const article1 = {
    "1-1-1": {
        action: "点击拾取",
    },
    "1-1-2": {
        action: "开始蘸取",
    },
    "1-1-3": {
        action: "开始消毒",
    },
    "2-1": {
        action: "green",
    },
    "2-2": {
        action: "yellow",
    },

}

// 吉尔碘.
const article2 = {
    "1-1": {
        action: "被棉签蘸取",
    },
    "1-2": {
        action: "blue",
    },
    "2-1": {
        action: "green",
    },
    "2-2": {
        action: "yellow",
    },
}