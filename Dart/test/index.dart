import 'dart:math';

class test<T> {
  final T Function() create;
  final other;

  const test(this.create, this.other);
}

void main() {
  // test<String>(() => "你好", "测试");
/*  int count = 0;
  print(count);
  count++;
  print(count);
  count++;
  print(count);
  count++;
  print(count);
  count++;
  print(count);*/
  DateTime dateTime = DateTime.now();
  print(dateTime.toString());
  int a1 = add(1, 2);
  print(a1);
  int a2 = add(3, 4);
  print(a2);
  int a3 = add(5, 6);
  print(a3);
  for(int i =0;i<10;i++){
    print(i);
  }
  print('end');
}

int add(value1, value2) {
  int result = value1 + value2;
  print(result);
  return result;
}
