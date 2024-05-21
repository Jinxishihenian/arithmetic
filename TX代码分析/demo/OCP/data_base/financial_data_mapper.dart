import '../interactor/interfaces/financial_data_gateway.dart';
import '../interactor/interfaces/financial_entities.dart';
import 'financial_data_base.dart';

class FinancialDataMapper implements FinancialDataGateway {
  FinancialDatabase financialDatabase = FinancialDatabase();

  // 整数数组从大到小排序方法.
  List<FinancialEntities> sort(List<FinancialEntities> numbers) {
    numbers.sort((a, b) => b.num.compareTo(a.num));
    return numbers;
  }

  // 获取数据.
  @override
  Future<List<FinancialEntities>> database() async {
    List<FinancialEntities> database = await financialDatabase.database();
    return sort(database);
  }

  // 保存.
  @override
  Future<void> save(List<FinancialEntities> list) async {
    financialDatabase.save(list);
  }
}
