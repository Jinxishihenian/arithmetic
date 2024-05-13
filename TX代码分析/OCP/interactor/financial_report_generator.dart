import 'interfaces/financial_data_gateway.dart';
import 'interfaces/financial_entities.dart';

// 财务数据发动机.
class FinancialReportGenerator {
  /// 数据管理.
  final FinancialDataGateway financialDataGateway;

  FinancialReportGenerator({required this.financialDataGateway});

  /// 其他状态.

  /// 生成报告.
  Future<void> generateReport() async {
    List<FinancialEntities> database = await financialDataGateway.database();
    // 修改状态.
  }

  /// 保存报告.
  Future<void> saveReport(List<FinancialEntities> list) async {
    await financialDataGateway.save(list);
    // 修改状态.
  }
}
