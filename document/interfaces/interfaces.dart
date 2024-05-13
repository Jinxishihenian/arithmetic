// 接口定义.
/// 定义该接口的作用是,避免视图业务直接依赖ViewModel.
/// 刷新加载接口.
abstract class LoadPageCountImplements {
// 页面总长.
  int? get listLength;

// 当前页面长度.
  int get currentListLength;

// 刷新方法.
  refresh();

// 加载方法.
  reload();
}

/// 页面状态接口.
abstract class PageStatusImplements {
// 页面状态.
  String get pageStatus;

// 是否为空.
  bool get contentIsEmpty;

// 重新加载方法.
  recover();
}

/// 列表接口.
abstract class ListImplements {
// 列表.
  List get list;

// 设置列表数据方法.
// 对列表中包含拖拽,删除等操作进行处理.
  setList();
}

/// 筛选接口.
abstract class SearchDataImplements {
  /// 根据筛选信息进行筛选.
  Future loadSearchData();
}