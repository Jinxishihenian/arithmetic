import '../interfaces/interfaces.dart';

mixin TxLoadDataList implements LoadPageCountImplements {
  @override
  int? get listLength => 0;

  @override
  int get currentListLength => 0;

  @override
  refresh() {
    print('刷新');

  }

  @override
  reload() {
    print('加载更多');
  }
}
