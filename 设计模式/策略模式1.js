const strategy = {
    'S': function (experience) {
        return 4 * experience;
    },
    'A': function (experience) {
        return 3 * experience;
    },
    'B': function (experience) {
        return 2 * experience;
    }
}

// 类似于Context类.
function getExperience(strategy, level, experience) {
    return (level in strategy) ? strategy[level](experience) : experience;
}

let a = getExperience(strategy, 'S', 100);
let b = getExperience(strategy, 'A', 100);
console.log(a);
console.log(b);