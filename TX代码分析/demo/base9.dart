abstract class Service {}

class ConcreteImpl implements Service {}

abstract class ServiceFactory {
  Service makeSvc();
}

class ServiceFactoryImpl implements ServiceFactory {
  @override
  Service makeSvc() {
    return ConcreteImpl();
  }
}

class Application {
  init() {
    ServiceFactoryImpl serviceFactoryImpl = ServiceFactoryImpl();
    Service service = serviceFactoryImpl.makeSvc();
  }
}

/// DIO 依赖翻转原则(抽象工厂模式)
main() {
  /// DIP实例.
  Application application = Application();
  application.init();
}
