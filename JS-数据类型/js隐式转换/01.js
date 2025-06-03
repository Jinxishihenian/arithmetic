var a = {
    num: 1,
    add: () => {
        return this.num++;
    }
}
console.log(a.add() == 1)
console.log(a.add() == 2)
console.log(a.add() == 3)
