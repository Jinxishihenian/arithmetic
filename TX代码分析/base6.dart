/// 基于面向对象编程,分页逻辑的复用.
main() {
  initPage();
}

initPage() {
  pageA();
  pageA();
}

// 模拟SmartRefresherWidget组件(实际这里通过泛型获取,Model中的smartLoadData).
onLoad(LoadPageCountImplements model) async {
  int nextPage = (model.currentCount ~/ 10) + 1;
  await model.smartLoadData(page: nextPage);
}

/// 模拟视图.
pageA() async {
  PageAModel pageAModel = PageAModel();
  await pageAModel.smartLoadData();
  await onLoad(pageAModel);
  print(pageAModel.currentCount);
}

/// 模拟视图.
pageB() async {
  PageBModel pageBModel = PageBModel();
  await pageBModel.smartLoadData();
  onLoad(pageBModel);
  print(pageBModel.currentCount);
}

// 请求接口.
abstract class TxLoadDataInterface {
  // 请求接口.
  Future<void> load({required Map request});
}

// 重新加载接口.
abstract class LoadPageCountImplements {
  int get totalCount;

  int get currentCount;

  /// 包含刷新/加载.
  Future<void> smartLoadData({int page = 1});
}

abstract class TxGetContentDataInterface {
  Future<List> getContentData({Map? request});
}

// 结果结果.
abstract class TxResultInterface {
  set result(List result);

  List get result;
}

// 筛选.
abstract class TxReLoadDataInterface {
  dynamic? get request;

  reLoadData();
}

// 筛选.
abstract class LoadDataFromMapImplements {
  Future<void> loadDataFromMap();
}

// 加载列表混入类.
/// 本质的问题就是LoadPageCountImplements原本是依赖于TxLoadDataInterface的.
mixin TxLoadDataList
    on TxLoadDataInterface, TxResultInterface
    implements LoadPageCountImplements {
  @override
  smartLoadData({int page = 1}) async {
    await load(request: {'page': page});
  }

  @override
  Future<void> load({required Map request}) async {
    await super.load(request: request);
  }

  // 列表当前长度.
  @override
  int get currentCount => result.length;

  @override
  // TODO: implement totalCount
  int get totalCount => throw UnimplementedError();
}

mixin TxLoadDataController
    implements
        TxResultInterface,
        TxLoadDataInterface,
        TxGetContentDataInterface,
        TxReLoadDataInterface {
// 数据结果.
  late List _result;
  late dynamic? _request;

  @override
  set result(List? t) {
    _result = t ?? [];
  }

  @override
  List get result => _result;

  @override
  dynamic? get request => _request;

  @override
  getContentData({Map? request});

  @override
  Future<void> load({required Map request}) async {
    /// 伪代码.
    print('只管理页面状态');
    print('只维护结果值');
    print('还需要存储request');
    List data = await getContentData(request: request);
    result = data;
  }
}

abstract class TxEasyListPageManager with TxLoadDataController, TxLoadDataList {
  /// 其他代码.
}

class PageAModel extends TxEasyListPageManager {
  @override
  getContentData({Map? request}) async {
    await Future.delayed(const Duration(microseconds: 1));
    List result = [];
    int count = request?['page'] * 10;
    for (int i = 0; i < count; i++) {
      result.add(i);
    }
    return result;
  }

  @override
  reLoadData() {
    // TODO: implement reLoadData
    throw UnimplementedError();
  }
}

class PageBModel extends TxEasyListPageManager {
  @override
  getContentData({Map? request}) async {
    await Future.delayed(const Duration(microseconds: 1));
    List result = [];
    int count = request?['page'] * 10;
    for (int i = 0; i < count; i++) {
      result.add(i);
    }
    return result;
  }

  @override
  reLoadData() {
    // TODO: implement reLoadData
    throw UnimplementedError();
  }
}
