class test<T> {
  final T Function() create;
  final other;

  const test(this.create, this.other);
}

void main() {
  test<String>(() => "你好", "测试");
}
