let attitude = function (original, replacment) {
    return function (source) {
        return source.replace(original, replacment);
    }
}

let snakify = attitude(/millenials/ig, 'Snake Peole');
let hippify = attitude(/baby boomers/ig, 'Aging Hippes');

console.log(snakify('The Millenials are always up to something.'));
console.log(hippify('The Baby Boomers just look the other way.'));
