let root = [
    {
        id: '1',
        children: [
            {
                id: '1-1',
                children: [
                    {id: '1-1-1'},
                    {id: '1-1-2'},
                ],
            },
            {
                id: '1-2',
                children: [{id: '1-2-1'}, {id: '1-2-2'}],
            },
        ],
    },
    {
        id: '2',
        children: [
            {
                id: '2-1',
                children: [{id: '2-1-1'}, {id: '2-1-2'}],
            },
            {
                id: '2-2',
                children: [{id: '2-2-1'}, {id: '2-2-2'}],
            },
        ],
    },
    {
        id: '3',
        children: [
            {
                id: '3-1',
                children: [{id: '3-1-1'}, {id: '3-1-2'}],
            },
            {
                id: '3-2',
                children: [{id: '3-2-1'}, {id: '3-2-2'}],
            },
        ],
    },
];

// 按照深度优先遍历一遍(使用递归).
// const traverse = (roots: any[]) => {
//     // 先把下一步要走的路都走一遍.
//     roots.forEach((e) => {
//         console.log(`item:`);
//         console.log(e);
//         traverse(e['children'] ? e['children'] : []);
//     });
// }

// 不使用递归(深度优先).
// 提示使用栈(先进后出)
// const traverseB = (roots: any[]) => {
// 使用一个数组记录需要循环的内容(为其中某分支).
// 难点,该分支循环到终点时如何回溯到上一个节点.
// 假说1:
// 循环到某个节点时将,上一级的节点作为父节点通过属性加入其中.
// 还需要一个节点判断当前节点是否已经循环.
// while (true) {
//
// }

// 不使用回调解法.

// 1.父节点向其中一个方向出发,并将当前节点信息传入.
// 2.到达子节点后,该属性由上一层节点传入,并标记该节点已经经过,给子组件增加属性father属性,
// 3.判断是否有可执行方向,有可执行方向则继续重复1,2步操作.
// 4.没有可执行操作,则通过添加的father属性,回溯上一层次(难点 无法回溯!无法回溯!),并判断是否有未,经过的方向.
// 为什么无法回溯,因为father存储的是没有经过状态修改的节点.
// 5.有该方向则向未经历过的方向出发,重复 1,2,3,4操作.
// 6.没有方向则回溯至顶层.
// 7.回溯至顶层之后如果已经将所有方向都经历过则遍历结束.


// }
// traverse(root);

// 按照广度优先遍历一遍.
// 提示采用队列的方式,就是排队,先进后出.
// 每次循环将同一层的值寻找出来,扔到函数中去.
/*
const dtraverse = (roots: any[]) => {
    let ty: Array<any> = [];
    roots.forEach((e) => {
        // 找出同一级内容.
        ty = ty.concat(e['children'] ? e['children'] : []);
    });
    console.log('同一层');
    console.log(ty);
    if (ty.length > 0) {
        dtraverse(ty);
    }
}
dtraverse(root);*/

// 利用栈结构完成深度优先遍历.
// const depthFirstSearchWithoutRecursive = (soure: any[]) => {
//     let child = JSON.parse(JSON.stringify(soure));
//     while (child.length > 0) {
//         // 数组第一个元素出栈.
//         const first = child.shift();
//         if (first['children'] && first['children'].length > 0) {
//             for (let i = 0; i < first['children'].length; i++) {
//                 console.log(first['children'][i]);
//                 child.unshift(first['children'][i]);
//             }
//         }
//     }
// }
//
// depthFirstSearchWithoutRecursive(root);

// 广度优先遍历.
// const findPathByBreadthFirstSearch = (source: any) => {
//     // let result = [];
//     let queue = JSON.parse(JSON.stringify(source));
//     while (queue.length > 0) {
//
//         for (let i = 0; i < queue['children'].length; i++) {
//             if (queue['children'][i] && queue['children'][i].length > 0) {
//                 queue.push(...queue['children'][i]);
//             }
//         }
//
//     }
// }

// // 广度优先搜索
// const findPathByBreadthFirstSearch = (source: any[]) => {
//     let result: Array<any> = [];
//     let queue = JSON.parse(JSON.stringify(source));
//     // console.log('while执行次数');
//     // 遍历队列（队列会动态增加）
//     //（从第一个路口开始试探）
//     for (let i = 0; i < queue.length; i += 1) {
//         // 获取当前队列的一项
//         // （这是一个路口）
//         const node = queue[i];
//         console.log("node content");
//         console.log(node);
//         // 判断节点是否为目标节点
//         //（路口是不是生门？）
//         // if (node.id === "3-2-2") {
//         //     // 队列清空
//         //     //（已经找到生门，不用再接着找了）
//         //     queue = [];
//         //     // 通过 parent 一层层查找路径
//         //     //（从这个路口通过面包屑【parent】找归途，直到找到回家的路）
//         //     return (function findParent(data: any): any {
//         //         result.unshift(data.id);
//         //         if (data.parent) {
//         //             return findParent(data.parent);
//         //         }
//         //         return result;
//         //     })(node);
//         // }
//         // 节点有子节点，设置子节点的 parent 为当前节点，推入队列
//         //（这个路口下还有其他路，先记住这个这个路口下的路是属于现在这个路口的【parent】
//         // 然后去下一个路口，按顺序来试）
//         if (node.children && node.children.length > 0) {
//             queue.push(
//                 ...node.children.map((leaf: any) => {
//                     leaf.parent = node;
//                     return leaf;
//                 })
//             );
//         }
//     }
//
//     return result;
// };
// findPathByBreadthFirstSearch(root);

// // 广度优先搜索使用队列.
// const breath = (root: any[]) => {
//     let arrs = JSON.parse(JSON.stringify(root));
//     // 使用队列的形式.
//     for (let i = 0; i < arrs.length; i++) {
//         console.log(arrs[i]);
//         if (arrs[i]['children'] && arrs[i]['children'].length > 0) {
//             arrs.push(...arrs[i]['children']);
//         }
//     }
// }
//
// breath(root);

// js遍历.
const arrs = [1, 2, 3, 4];
// for (let item of arrs) {
//     console.log("each item:");
//     console.log(item);
// }
for (let item in arrs) {
    console.log("each item:");
    console.log(item);
}