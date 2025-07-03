function Person(name){
   this.name = name;
}
const p = new Person("Jackson");

console.log(p instanceof Person);