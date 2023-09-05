import 'dart:async';

void main() {
  print('测试');
}

class DataBloc {
  // 定义一个Controller.
  StreamController<List<String>> _dataController =
      new StreamController<List<String>>();

  // 获取 StreamSink 做 add 入口.
  StreamSink<List<String>> get _dataSink => _dataController.sink;

  // 获取Stream用于监听.
  Stream<List<String>> get _dataStream => _dataController.stream;

  // 事件订阅对象.
  late StreamSubscription _dataSubscription;

  init() {
    // 监听事件.
    _dataSubscription = _dataStream.listen((value) {
      // do change.
    });
    // 改变事件.
    _dataSink.add(["1", "2", "3"]);
  }

  close() {
    // 关闭.
    _dataSubscription.cancel();
    _dataController.close();
  }
}
