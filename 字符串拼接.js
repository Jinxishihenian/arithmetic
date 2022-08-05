/**
 * 字符串拼接方式.
 */
const oJoinType = {
    // 1.任意拼接项不可用,则返回占位符.
    useAll: "useAll",
    // 2.任意拼接项不可用,则该拼接项之后所有拼接项弃用.
    useTop: "useTop",
    // 3.任意拼接项不可用,则忽略该拼接项.
    useArbitrarily: "useArbitrarily",
}

/**
 * wss 字符串拼接工具函数
 * 应用场景:
 * 1.开始时间~结束时间.
 * 2.省/市/县.
 * 3.附加信息拼接 [1]赛事:阶段名称 [2]高教主赛道/本科生创意组.
 * 4.其他...
 *
 * 拼接方式:
 * @param sKeyWord 连接关键字
 *
 * 1.任意拼接项不可用,则返回占位符.
 * 2.任意拼接项不可用,则该拼接项之后所有拼接项弃用(包含不可用拼接项).
 * 3.任意拼接项不可用,则忽略该拼接项.
 * @param sJoinType 不必填 默认值 oJoinType.useArbitrarily 连接类型.
 *
 * @param sPlaceholder 不必填 默认值 “-” 占位符.
 * @param props 参数列表
 */
const fnConnectChar = ({ sKeyWord, sJoinType = oJoinType.useArbitrarily, sPlaceholder = "-" }, ...props) => {
    const aProps = props;
    let sShowContent = "";
    try {
        switch (sJoinType) {
            // 1.任意拼接项不可用,则返回占位符.
            case oJoinType.useAll:
                sShowContent = fnUseAll(sKeyWord, sPlaceholder, aProps)
                break;
            // 2.任意拼接项不可用,则该拼接项之后所有拼接项弃用.
            case oJoinType.useTop:
                sShowContent = fnUseTop(sKeyWord, sPlaceholder, aProps)
                break;
            // 3.任意拼接项不可用,则忽略该拼接项.
            case oJoinType.useArbitrarily:
                sShowContent = fnUseArbitrarily(sKeyWord, sPlaceholder, aProps);
                break;
            default:
                sShowContent = sPlaceholder;
                break;
        }
    } catch (e) {
        sShowContent = sPlaceholder;
        console.error("请检查,输入内容是否规范");
    }

    return sShowContent;
}

// 字符串是否可用.
const fnIsUseChar = (sChar) => {
    return sChar !== undefined && sChar !== null && sChar.trim() !== "";
}

// type 1:
const fnUseAll = (sKeyWord, sPlaceholder, aProps) => {
    const bIsUse = aProps.every((sItem) => {
        return fnIsUseChar(sItem);
    });

    return bIsUse && aProps.length > 0 ? aProps.join(sKeyWord) : sPlaceholder;
}

// type 2:
const fnUseTop = (sKeyWord, sPlaceholder, aProps) => {
    let aUseProps = [];
    for (let i = 0; i < aProps.length; i++) {
        if (!fnIsUseChar(aProps[i])) {
            break;
        }
        aUseProps.push(aProps[i]);
    }

    return aUseProps.length > 0 ? aUseProps.join(sKeyWord) : sPlaceholder;
}

// type 3:
const fnUseArbitrarily = (sKeyWord, sPlaceholder, aProps) => {
    let aUseProps = aProps.filter((item) => {
        return fnIsUseChar(item);
    });
    return aUseProps.length > 0 ? aUseProps.join(sKeyWord) : sPlaceholder;
}

// 函数柯里化/高阶函数.
// 只针对时间.
const joinTimeWrapper = () => {
    return (beTime, endTime) => {
        return fnConnectChar({ sKeyWord: "~" }, beTime, endTime);
    }
}

// 只针对地区.
const joinSiteWrapper = () => {
    return (...props) => {
        return fnConnectChar({ sKeyWord: "/", sJoinType: oJoinType.useTop }, ...props)
    }
}

/**
 * 用法
 */
// 1 可简写使用默认参数.
// console.log(fnConnectChar({ sKeyWord: "~" }, "开始时间", "结束时间"));

// 2 可全部写入参数.
// console.log(fnConnectChar({ sKeyWord: "/", sJoinType: oJoinType.useTop, sPlaceholder: "占位符" }, "说明1", "", "", "说明4"));

// 在模块中打开该注释.
// export { fnConnectChar, oJoinType };
