const data = [
    {name: 'wss1', age: '18', children: []},
    {
        name: 'wss2', age: '18', children: [
            {name: 'wss2-1', age: '18', children: []},
        ]
    },
    {name: 'wss3', age: '18', children: []},
];
// console.log('初始值',JSON.stringify(data));
const data2 = [].concat(data)
// console.log('浅拷贝值',JSON.stringify(data));

// 修改.
// data2[1].children[0]=[];

// 深拷贝API.
const info = JSON.parse(JSON.stringify(data));
console.log(info);
