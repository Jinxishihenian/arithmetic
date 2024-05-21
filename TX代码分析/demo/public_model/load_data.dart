// 混入类.
import '../interfaces/interfaces.dart';
import '../widgets/search.dart';

mixin loadDataMixin<T> on SearchModule implements ListImplements {
  // 请求结果.
  T? result;

  // 当前页.
  int _page = 1;

  // 当前页面大小.
  int _pageSize = 10;

  @override
  List get list {
    // 列表数据.
    return [];
  }

  @override
  setList() {
    // 设置列表数据.
  }

  /// 定义一个抽象方法由子类实现.
  Future loadData();

  /// 加载更多(共享方法).
  /// 减小颗粒度,将RefreshController判断的内容放到widget内处理.
  onRefresh() {
    _page++;
    loadData();
  }

  /// 刷新数据(共享方法).
  /// 减小颗粒度,将RefreshController判断的内容放到widget内处理.
  onLoad() {
    _page = 1;
    loadData();
  }
}
