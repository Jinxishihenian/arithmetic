import 'package:exam_flutter/widget/demo/widgets/list.dart';
import 'package:exam_flutter/widget/demo/widgets/scaffold.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../public_model/page.dart';

class TxEasyScreeningListPage<T extends TxEasyScreeningPageManager> extends StatelessWidget {
  const TxEasyScreeningListPage({super.key, required this.create});

  // View model 构造函数.
  final Function create;

  @override
  Widget build(BuildContext context) {
    /// 根列表页面.
    return MultiProvider(
      providers: [
        ListenableProvider<T>(create: (_) => create()),
      ],
      child: Builder(builder: (context) {
        return const TxListPageScaffold(
          /// 列表组件.
          body: ListPage(),
        );
      }),
    );
  }
}
