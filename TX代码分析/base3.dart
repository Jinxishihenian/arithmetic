main() {
  // 开始工作(未使用依赖反转之前的代码).
  A a = A(AB());
  a.write();
}

// 电脑类
class A {
  /// 从类A指向AB的箭头意味着A的源代码中涉及了AB,但是AB的源代码中并不涉及A.

  /// 依赖关系(使用关系)
  Input ab;

  A(this.ab);

// 写字.
  void write() {
    // print('write');
    ab.input();
  }
}

// 从A类中抽象出来的输入接口.
abstract class Input {
  input();
}

// 键盘类
class AB implements Input {
  // 输入.
  @override
  void input() {
    print('输入');
  }
}
