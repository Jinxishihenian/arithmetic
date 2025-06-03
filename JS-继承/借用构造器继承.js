function Animal(name){
    this.name = name;
}

function Cat(){
    Animal.call(this,"CatName");
}