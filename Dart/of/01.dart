void main() {
  // 静态方法创建Cat类的实例.
  Cat myCat = Cat.of('Whiskers');
  print("My car's name is ${myCat.name}");
}

class Cat {
  final String name;

  Cat(this.name);

  // 静态方法,用于创建 Cat 类的实例.
  // 不叫of也行,可以叫做其他名称.
  static Cat of(String name) {
    // 这里可以执行一些额外的逻辑.
    return Cat(name);
  }
}
