/*我想知道一些关于这个的事情：
本班平均成绩
男生平均成绩
女生平均成绩
男生中音调较高
女生中音调较高*/
// 这是不是更类似于函数组合.
// 高阶函数.
let grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
];

// 是否是女孩.
let isBoys = student => student.sex === 'M';

// 是否是男孩.
let isGirl = student => student.sex === 'F';

// 获取所有男孩.
let getBoys = grades => (grades.filter(isBoys));

// 获取所有女孩.
let getGirl = grades => (grades.filter(isGirl));

// 获取平均值.
let average = grades => (
    grades.reduce((acc, curr) => {
        return acc + curr.grade;
    }, 0) / grades.length
)

// 获取最大值.
let maxGrade = grads => (Math.max(...grads.map(student => student.grade)));

// 获取最小值.
let minGrade = grads => (Math.min(...grads.map(student => student.grade)));

// 获取本班的平均值.
let classroomAverage = average(grades);

// 获取男生平均成绩.
let boysAverage = average(getBoys(grades));

// 获取女生平均成绩.
let girlsAverage = average(getGirl(grades));

// 获取最高分.
let highestGrade = maxGrade(grades);

// 获取最低分.
let lowestGrade = minGrade(grades);

// 获取男生最高分.
let highestBoysGrade = maxGrade(getBoys(grades));

// 获取男生最低分.
let lowestBoysGrade = minGrade(getBoys(grades));

// 获取女生最高分.
let highestGirlGrade = maxGrade(getGirl(grades));

// 获取女生最低分.
let lowestGirlGrade = minGrade(getGirl(grades));
console.log(classroomAverage)
console.log(boysAverage)
console.log(girlsAverage)
console.log(highestGrade)
console.log(lowestGrade)
console.log(highestBoysGrade)
console.log(lowestBoysGrade)
console.log(highestGirlGrade)
console.log(lowestGirlGrade)


