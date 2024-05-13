import 'financial_entities.dart';

/// DIS 依赖反转.
abstract class FinancialDataGateway {
  // 获取数据.
  Future<List<FinancialEntities>> database();

  // 保存数据.
  Future<void> save(List<FinancialEntities> list);
}
