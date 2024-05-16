main() {
  test1(1);
  test2(b: 2);
}

/// 可选位置参数.
test1([int? a, int? b]) {
  print('a:${a ?? 'a未填'}');
  print('b:${b ?? 'b未填'}');
}

/// 可选命名参数.
test2({int? a, int? b}) {
  print('a:${a ?? 'a未填'}');
  print('b:${b ?? 'b未填'}');
}
