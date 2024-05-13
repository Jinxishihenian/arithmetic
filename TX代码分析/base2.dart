//传统控制流.
main() {
  // 开始工作(未使用依赖反转之前的代码).
  Work work = Work();
  work.printInfo();
  // 开始工作使用依赖反转.
  // 数据库插件.
  DataBase2 dataBase2 = DataBase2();
  // 界面插件.
  UserInterface2 userInterface2 = UserInterface2();
  Work2 work2 = Work2(
    dataBase2,
    userInterface2,
  );
  work2.printInfo();
}

/// 未使用依赖反转之前的代码.
/// 业务逻辑类Work依赖于DataBase和UserInterface类.
// 业务逻辑.
class Work {
  // 数据库.
  final DataBase dataBase = DataBase();

  // 用户界面.
  final UserInterface userInterface = UserInterface();

  // 弹出界面并显示数据.
  void printInfo() {
    userInterface.printInfoButton(dataBase.printInfo());
  }
}

// 用户界面.
class UserInterface {
  // 弹出界面并输出数据.
  void printInfoButton(String info) {
    print("弹出界面：${info}");
  }
}

// 数据库.
class DataBase {
  // 屏幕内容.
  String printInfo() {
    return "屏幕信息";
  }
}

/// 尝试使用依赖翻转.
// 数据库接口.
abstract class IDataBase {
  String printInfo();
}

// 用户界面接口.
abstract class IUserInterface {
  void printInfoButton(String info);
}

// 实现数据库接口.
class DataBase2 implements IDataBase {
  @override
  String printInfo() {
    return "屏幕信息2";
  }
}

// 业务逻辑.
class UserInterface2 implements IUserInterface {
  @override
  void printInfoButton(String info) {
    print("弹出界面2：${info}");
  }
}

class Work2 {
  // 数据库接口.
  final IDataBase dataBase;

  // 用户界面接口.
  final IUserInterface userInterface;

  Work2(this.dataBase, this.userInterface);

  // 弹出界面并显示数据.
  void printInfo() {
    userInterface.printInfoButton(dataBase.printInfo());
  }
}
