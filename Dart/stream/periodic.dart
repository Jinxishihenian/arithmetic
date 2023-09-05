void main() {
  test();
}

// 可以在回调函数中对值进行处理,这里直接返回了.
// 产生元素放入这个Stream.
int callback(int value) {
  return value;
}

test() async {
  // 使用 periodic 创建流,第一个参数为间隔时间.第二个参数为回调函数.
  Stream<int> stream = Stream<int>.periodic(Duration(seconds: 1), callback);
  // 方式1.
  // await for 循环从流中读取.
  // await for (var i in stream) {
  //   print(i);
  // }
  // 方式2.
  // listen.
  stream.listen((event) {
    print(event);
  });
}
