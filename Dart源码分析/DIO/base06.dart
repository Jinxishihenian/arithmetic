/// factory 工厂模式.
/// 1.对象缓存和重用.
/// 2.子类实例返回.
/// 3.对象池和资源管理.
/// 4.对象初始化复杂逻辑.
class MyClass {
  final String name;

  // 私有构造函数.
  MyClass._(this.name);

  factory MyClass(String name) {
    if (name == 'existing') {
      return ExistingInstance();
    } else {
      return MyClass._(name);
    }
  }
}

class ExistingInstance extends MyClass {
  ExistingInstance() : super._('Existing Instance');
}
void main() {
  var obj1 = MyClass('John'); // 创建一个新的实例
  var obj2 = MyClass('existing'); // 返回一个已存在的实例

  print(obj1.name); // 输出: John
  print(obj2.name); // 输出: Existing Instance
}