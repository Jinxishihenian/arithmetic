import 'package:exam_flutter/widget/demo/widgets/refresh.dart';
import 'package:exam_flutter/widget/demo/widgets/status.dart';
import 'package:flutter/material.dart';
import 'search.dart';

class TxListPageScaffold extends StatelessWidget with SearchPage {
  final Widget body;

  const TxListPageScaffold({required this.body, super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('新的页面结构'),
        centerTitle: true,
      ),
      // 顶部筛选.
      body: topFilterWidget(
        /// 状态组件.
        child: TxPageStateWidget(
          buildChildWidget: (Widget? widget) {
            // 获取页面状态.
            return SmartRefresherWidget(
              child: ListView(
                children: [body],
              ),
            );
          },
        ),
      ),
      // 侧边筛选栏.
      endDrawer: sidebarFilterWidget(),
    );
  }
}
