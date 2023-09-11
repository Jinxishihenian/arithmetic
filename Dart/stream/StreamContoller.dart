import 'dart:async';

void main() {
  test();
}

test() async {
  // 创建streamController.
  // streamController控制包装streamController
  // 可以用于跨组件通讯
  StreamController streamController = StreamController<String>(
    onListen: () => print('onListen'),
    onPause: () => print('onPause'),
    onResume: () => print('onResume'),
    onCancel: () => print('onCancel'),
  );
  // 放入事件.
  streamController.add('hello');
  streamController.addError('this is error');
  // streamController.sink.add('element_2');
  StreamSubscription ss = streamController.stream.listen(
    (v) => {print("element$v")},
    onDone: () => print('onDone'),
    onError: (e) => {print("onError$e")},
  );
  ss.pause();
  ss.resume();
  // ss.cancel();
  // ss.close();
}
