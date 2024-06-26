///  请求状态.
enum LoadingState {
  start,
  first,
  loading,
  error,
  end,
}

/// 页面状态.
enum LoadingWidgetState {
  loading,
  error,
  content,
}

/// 请求结果.
abstract class Result {
  set result(List list);

  List get result;
}

/// 请求.
abstract class Request {
  /// 请求数据.
  void request({Map? parameter});
}

/// 重新加载.
abstract class Reload {
  /// 重新加载.
  void reload({Map? parameter});

  /// 请求参数.
  Map? parameter;
}

/// 刷新,加载.
abstract class Refresh {
  int get pageCurrentCount;

  /// 刷新.
  void refresh({int page});

  /// 加载.
  void load({int page});
}

/// 搜索.
abstract class Search {
  /// 搜索.
  void search({Map parameter});
}

/// 请求状态.
abstract class RequestStatus {
  LoadingState get state;
}

/// 页面状态.
abstract class PageStates {
  /// 页面状态.
  LoadingWidgetState get widgetState;

  /// 重新请求.
  reLoadData();
}

/// 请求混入类.
mixin RequestMixin implements Request, Reload, Result, RequestStatus {
  /// 维护请求结果.
  List _result = [];
  LoadingState _state = LoadingState.start; // 当前请求状态.

  @override
  LoadingState get state {
    return _state;
  }

  @override
  List get result => _result;

  @override
  set result(List list) {
    _result = list;
  }

  /// 请求参数.
  @override
  Map? parameter;

  /// 请求数据.
  @override
  void request({Map? parameter}) {
    try {
      /// 保存result参数伪代码.
      _state = LoadingState.loading;
      result = getData(parameter: parameter);
      _state = LoadingState.end;
    } catch (e) {
      // 加载错误.
      _state = LoadingState.error;
      result = [];
    }
  }

  /// 重新加载.
  @override
  void reload({Map? parameter}) {
    /// 重新加载时其他要做的事情.
    // request(parameter: parameter);
    print('刷新我的组件');
  }

  /// 抽象方法.
  List getData({Map? parameter});
}

/// 刷新加载.
mixin ReloadMixin on RequestMixin implements Refresh {
  /// 维护总页数代码.
  @override
  int get pageCurrentCount => result.length;

  /// 刷新.
  @override
  void refresh({int page = 1}) {
    /// 刷新时其他要做的事情.
    Map _parameter = {'page': 1, ...?parameter};

    request(parameter: _parameter);
  }

  /// 加载.
  @override
  void load({int page = 1}) {
    /// 加载时其他要做的事情.
    Map _parameter = {'page': page, ...?parameter};
    // 请求.
    request(parameter: _parameter);
  }
}

/// 搜索混入类.
mixin SearchMixin on Request implements Search {
  /// 顶部搜索.
  @override
  search({Map? parameter}) {
    /// 顶部搜索时其他要做的事情.
    request(parameter: parameter);
  }
}

/// 页面状态混入类.
mixin PageStatesMixin on Reload, RequestStatus implements PageStates {
  get _loadingWidgetState {
    switch (state) {
      case LoadingState.start:
        return LoadingWidgetState.loading;
      case LoadingState.first:
        return LoadingWidgetState.loading;
      case LoadingState.error:
        return LoadingWidgetState.error;
      case LoadingState.loading:
        return LoadingWidgetState.content;
      case LoadingState.end:
        return LoadingWidgetState.content;
    }
  }

  @override
  LoadingWidgetState get widgetState => _loadingWidgetState;

  @override
  reLoadData() {
    reload();
  }
}

class PageA with RequestMixin, ReloadMixin, SearchMixin {
  /// 页面其他逻辑.
  /// 定义位置.
  @override
  List getData({Map? parameter}) {
    // 判断parameter是否包含page.
    bool isPageKey = parameter?.containsKey('page') ?? false;
    if (!isPageKey) {
      print('走搜索逻辑吧...');
      return ['噼里啪啦一顿搜索'];
    }

    int page = parameter?['page'];
    List result = [];
    for (int i = 0; i < page * 10; i++) {
      result.add(i);
    }
    return result;
  }
}

class PageStateA extends PageA with PageStatesMixin {}

class PageB with RequestMixin, ReloadMixin, SearchMixin {
  /// 页面其他逻辑.
  /// 定义位置.
  @override
  List getData({Map? parameter}) {
    print('获取页面B的列表数据');
    int page = parameter?['page'];
    List result = [];
    for (int i = 0; i < page * 10; i++) {
      result.add(i);
    }
    return result;
  }
}

main() {
  /// 模拟页面A逻辑.
  pageA();

  /// 模拟页面B逻辑.
  pageB();
}

// 页面A
pageA() {
  PageA A = PageA();

  /// 初次加载.
  A.refresh();

  /// 下一页.
  int nextPage1 = A.pageCurrentCount ~/ 10 + 1;
  A.load(page: nextPage1);

  int nextPage2 = A.pageCurrentCount ~/ 10 + 1;
  A.load(page: nextPage2);

  /// 筛选.
  A.search(parameter: {
    'key': 'value',
  });

  /// 当前页数.
  print(A.pageCurrentCount);

  // A.search({});
  pageStateA();
}

// 页面B
pageB() {
  PageB B = PageB();

  /// 初次加载.
  B.refresh();

  /// 下一页.
  int nextPage1 = B.pageCurrentCount ~/ 10 + 1;
  B.load(page: nextPage1);

  /// 当前页数.
  print(B.pageCurrentCount);
}

pageStateA() {
  PageStateA StateA = PageStateA();
  StateA.reLoadData();
  print(StateA.widgetState);
  print(StateA.state);
}

/// 维护一个options队列.
/// 1.何时启用?
/// 2.何时清空?
/// 3.多个请求并发如何处理？
