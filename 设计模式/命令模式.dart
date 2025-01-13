// 命令接口.

abstract class Order {
  void execute();
}

// 请求.
class Stock {
  void buy() {
    print('卖出');
  }

  void sell() {
    print('购买');
  }
}

// 具体请求.
class SellStock implements Order {
  late Stock stock;

  @override
  void execute() {
    stock.buy();
  }

  SellStock({required this.stock});
}

// 具体请求.
class BuyStock implements Order {
  late Stock stock;

  @override
  void execute() {
    stock.sell();
  }

  BuyStock({required this.stock});
}

// 调用类.
class Broker {
  List<Order> orderList = <Order>[];

  addOrder(Order order) {
    orderList.add(order);
  }

  placeOrders() {
    orderList.forEach((item) {
      item.execute();
    });
    orderList.clear();
  }
}

main() {
  Stock stock = new Stock();
  BuyStock buyStock = new BuyStock(stock: stock);
  SellStock sellStock = new SellStock(stock: stock);
  Broker broker = new Broker();
  broker.addOrder(buyStock);
  broker.addOrder(sellStock);
  broker.placeOrders();
}
