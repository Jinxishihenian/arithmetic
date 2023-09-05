void main() {
  test();
}

test() async {
  print("test start");
  Future<String> fut = Future(() {
    return "async task";
  });
  // 从Future创建Stream
  Stream<String> stream = Stream<String>.fromFuture(fut);
  // await 进行阻塞.
 /* await for (var s in stream) {
    print(s);
  }*/
  // listen不会进行阻塞.
  stream.listen((event) {
    print(event);
  });

  print("test end");
}
