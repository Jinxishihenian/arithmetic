import 'package:flutter/cupertino.dart';

import '../view_model/model.dart';
import '../widgets/page.dart';

class DemoList extends StatefulWidget {
  const DemoList({super.key});

  @override
  State<DemoList> createState() => _DemoListState();
}

class _DemoListState extends State<DemoList> {
  @override
  Widget build(BuildContext context) {
    /// 根页面.
    return TxEasyScreeningListPage<ListModel>(
      create: () => ListModel(),
    );
  }
}
