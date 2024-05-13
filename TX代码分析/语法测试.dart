// // mixin BaseLoadMixin {
// //   // 混入抽象方法.
// //   void loadData();
// // }
//
// abstract class TxEasyScreeningPageManager with BaseLoadMixin {
//   showData() {
//     loadData();
//   }
// }
//
// class Task extends TxEasyScreeningPageManager {
//   @override
//   void loadData() {
//     // TODO: implement loadData
//     print('我加载Task列表的数据');
//   }
// }
//
// class Contract extends TxEasyScreeningPageManager {
//   @override
//   void loadData() {
//     // TODO: implement loadData
//     print('我加载contract列表数据');
//   }
//
// // 分页计算.
//   void pageSize(int currentPage) {
//     // print(currentPage ~/ 10 + 1);
//   }
// }
//
// main() {
//   // Task().showData();
//   // Contract().loadData();
//   Contract().pageSize(20);
// }
