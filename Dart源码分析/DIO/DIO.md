### DIO源码解析.

##### 文件夹结构
```dart
/// adapters 适配器.
```
##### dio.dart
```dart
/// 抽象类.
/// 针对不同的平台继承实现.
/// 1.Native.
/// 2.Browser.
/// 3.DioMixin 但是依旧实现了Dio接口,作用未知.
abstract class Dio {}

```
