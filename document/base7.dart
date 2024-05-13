// 多态->同一个行为具有不同的表现形式,或者形态的能力.

// 委托+接口隔离.
// 定义抽象类机枪.
abstract class MachineGun {
  /// 开火.
  void fire();
}

// 定义抽象类作用.
abstract class Effect {
  /// 杀人.
  void kill();
}

// 定义类AK47.
class AK47 implements MachineGun, Effect {
  @override
  void fire() {
    print('AK47 开火');
  }

  void kill() {
    print('AK47 杀人');
  }
}

// 定义玩具枪类.
class ToyGun implements MachineGun {
  @override
  void fire() {
    print('玩具枪 开火');
  }

  void killVC() {
    print('模拟杀人');
  }
}

// 士兵类.
class Soldier {
  Effect effect;

  Soldier(this.effect);

  void kill() {
    effect.kill();
  }
}

// 接口隔离.
class User1 {
  use(OPS1 ops) {
    ops.ops1();
  }
}

class User2 {
  use(OPS2 ops) {
    ops.ops2();
  }
}

class User3 {
  use(OPS3 ops) {
    ops.ops3();
  }
}

abstract class OPS1 {
  void ops1();
}

abstract class OPS2 {
  void ops2();
}

abstract class OPS3 {
  void ops3();
}

class OPS implements OPS1, OPS2, OPS3{
  @override
  ops1() {
    print('ops1');
  }

  @override
  ops2() {
    print('ops2');
  }

  @override
  ops3() {
    print('ops3');
  }
}

main() {
  // AK47 ak47 = AK47();
  // ToyGun toyGun = ToyGun();
  // ak47杀人.
  // Soldier soldier = Soldier(ak47);

  // 开火.
  // ak47.fire();
  // 杀人.
  // soldier.kill();
  OPS ops = OPS();
  User1 user1 = User1();
  user1.use(ops);
  User2 user2 = User2();
  user2.use(ops);
  User3 user3 = User3();
  user3.use(ops);
}
