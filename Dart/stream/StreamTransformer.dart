import 'dart:async';

void test() {
  StreamController sc = StreamController<String>();
  StreamTransformer stf = StreamTransformer<String, int>.fromHandlers(
    // 控制转换部分.
    handleData: (String data, EventSink<int> sink) {
      print("--$data");
      int i = int.parse(data) * 2;
      sink.add(i);
    },
    handleError: (error, stacktrace, sink) {
      sink.addError('wrong:$error');
    },
    handleDone: (sink) {
      sink.close();
    },
  );
  Stream stream = sc.stream.transform(stf);
  stream.listen(print);
  sc.add("1");
  sc.add("2");
  sc.add("3");
}

void main() {
  test();
}
