main() {
  Human human = Human();
  human.sayHello();
  human.active();
}

mixin Test on TestInterface {
  // 打印.
  void printInfo(String info) {
    print(info);
  }
}

class Human extends TestInterface with Test {
  String _name = '人类';

  void sayHello() {
    printInfo('大家好，我是$_name');
  }

  @override
  void active() {
    print('战争');
  }
}

abstract class TestInterface {
  void active();
}
