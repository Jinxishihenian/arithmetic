// 抽象类.
import 'package:exam_flutter/widget/demo/%E8%AF%AD%E6%B3%95%E6%B5%8B%E8%AF%95.dart';
import 'package:exam_flutter/widget/demo/widgets/search.dart';
import 'package:flutter/cupertino.dart';

import '../view_model/tx_load_data_controller.dart';

abstract class TxEasyScreeningPageManager extends ChangeNotifier
    with TxLoadDataController, SearchModule {
  // 混入请求工具类.
  // 混入搜索工具类.
}
