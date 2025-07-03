const tree = [
    {
        id: 1,
        name: 'Node 1',
        children: [
            { id: 2, name: 'Node 1-1' },
            { id: 3, name: 'Node 1-2', children: [{ id: 4, name: 'Node 1-2-1' }] }
        ]
    },
    {
        id: 5,
        name: 'Node 2'
    }
];
// 目标：递归遍历所有节点，收集所有 name 字段。
const foc = (tree)=>{
    const tree2 = [];
    const deepName=(tree)=>{
        for(let i = 0; i < tree.length; i++){
            // 判断是否有children属性.
            if(tree[i]['children']?.length>0){
                deepName(tree[i]['children']);
            }
            tree2.push(tree[i]['name']);
        }
    }
    deepName(tree);
    return tree2;
}

console.log(foc(tree));