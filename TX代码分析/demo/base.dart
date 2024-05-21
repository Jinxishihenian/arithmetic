import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

/// 模版模式.
/// 抽象基类. BaseWidget
abstract class BaseWidget extends StatefulWidget {
  const BaseWidget({super.key});

  @override
  BaseWidgetState<BaseWidget> createState() => getState();

  /// 子类实现.
  BaseWidgetState getState();
}

abstract class BaseWidgetState<T extends BaseWidget> extends State<T> {
  @override
  Widget build(BuildContext context) {
    return const Placeholder();
  }

  /// 默认视图.
  Widget _buildWidgetDefault() {
    // return Text('默认视图,默认title,默认body');
    return Scaffold(
      appBar: AppBar(
        title: Text('默认标题'),
      ),
      body: buildBody(),
    );
  }

  /// 包含安全键盘的视图.

  Widget _buildWidgetWithKeybord() {
    // return Text('包含安全键盘的视图,默认title,默认body');
    return Scaffold(
      appBar: AppBar(
        title: Text('默认标题(包含安全键盘)'),
      ),
      body: buildBody(),
    );
  }

  /// 子类实现,构建各自页面的UI控件,相当于setContentView();
  Widget buildWidget(BuildContext context);

  /// 子类实现,
  void queryData() {}

  /// 构建内容区.
  Widget buildBody() {
    return Container(
      /// 内容区背景颜色.
      color: Colors.red,
      child: Stack(
        children: [
          // 1.内容区.
          Offstage(
            offstage: true,
            child: buildWidget(context),
          ),

          Text('报错区'),
          Text('空白区'),
          Text('加载区'),
        ],
      ),
    );
  }
}

/// tx版本.

/// 定义一个抽象类.
abstract class LoadingWidgetStateImplements {
  // 通用加载状态.
  bool load = true;

  // 加载数据.
  void loading();

  // 刷新.
  void onRefresh() {
    // 调用loading抽象方法.
    // 修改load状态.
  }

  // 加载更多.
  void onLoad() {
    // 调用loading抽象方法.
    // 修改load状态.
  }
}

/// 实现接口.
class MyLoadingWidgetState extends LoadingWidgetStateImplements {
  @override
  void loading() {
    // TODO: implement loading
  }

  @override
  late bool load;
}

class TxPageStateWidget<T extends LoadingWidgetStateImplements>
    extends StatelessWidget {
  const TxPageStateWidget({super.key});

  // 通过LoadingWidgetStateImplements 泛型获取值哦.
  @override
  Widget build(BuildContext context) {
    bool isError = context.watch<T>().load;
    return Text('结构');
  }
}

class Structure extends StatefulWidget {
  const Structure({super.key});

  @override
  State<Structure> createState() => _StructureState();
}

class _StructureState extends State<Structure> {
  @override
  Widget build(BuildContext context) {
    // return const Placeholder();
    // return TxPageStateWidget();
    return const Scaffold(body: TxPageStateWidget<MyLoadingWidgetState>());
  }
}
