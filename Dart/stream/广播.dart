import 'dart:async';

void main() {
  test();
}

test() {
  StreamController sc = StreamController.broadcast();
  sc.stream.listen(print);
  sc.stream.listen(print);
  sc.add('event1');
  sc.add('event2');
}
