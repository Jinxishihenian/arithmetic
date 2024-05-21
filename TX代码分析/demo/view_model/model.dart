import '../public_model/page.dart';

/// 目前只考虑数据加载.
class ListModel extends TxEasyScreeningPageManager {
  @override
  Future getContentData() {
    print('加载数据');
    return Future.value();
  }
}
