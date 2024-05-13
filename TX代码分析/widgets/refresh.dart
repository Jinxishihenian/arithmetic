import 'package:flutter/cupertino.dart';
import 'package:provider/provider.dart';
import 'package:pull_to_refresh/pull_to_refresh.dart';

import '../interfaces/interfaces.dart';

class SmartRefresherWidget<T extends LoadPageCountImplements>
    extends StatefulWidget {
  final Widget? child;

  const SmartRefresherWidget({super.key, this.child});

  @override
  State<SmartRefresherWidget> createState() => _SmartRefresherWidgetState<T>();
}

class _SmartRefresherWidgetState<T extends LoadPageCountImplements>
    extends State<SmartRefresherWidget> {
  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    print('初始化刷新..');
  }

  onLoading() {}

  onRefresh(BuildContext context) {
    // 基于ctx.read调用加载数据方法.
    context.read<T>().refresh();
  }

  @override
  Widget build(BuildContext context) {
    return SmartRefresher(
      controller: RefreshController(),
      onLoading: () => {},
      onRefresh: () => {},
      child: widget.child,
    );
  }
}
