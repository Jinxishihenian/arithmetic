import '../interactor/interfaces/financial_entities.dart';

class FinancialDatabase {
  /// 模拟基础数据请求通常为异步.
  Future<List<FinancialEntities>> database() async {
    await Future.delayed(const Duration(seconds: 1));
    return [FinancialEntities(num: 3), FinancialEntities(num: 3), FinancialEntities(num: 3)];
  }

  /// 保存.
  Future<void> save(List<FinancialEntities> list) async {
    await Future.delayed(const Duration(seconds: 1));
    print(list.toList());
  }
}
