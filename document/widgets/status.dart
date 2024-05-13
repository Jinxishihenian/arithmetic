import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

typedef ChildWidget = Widget Function(Widget? value);

class TxPageStateWidget extends StatelessWidget {
  final ChildWidget buildChildWidget;

  const TxPageStateWidget({required this.buildChildWidget, super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Stack(
        alignment: Alignment.center,
        children: [
          buildChildWidget(
            Container(
              color: Colors.yellow,
              child: const Text('加载中...'),
            ),
          ),
          Positioned(
            // alignment: Alignment.topCenter,
            child: Container(
              // color: Colors.blue,
              alignment: Alignment.center,
              child: const Text(
                '嗨嗨嗨，我是页面加载状态',
                // 文字对齐.
              ),
            ),
          ),
        ],
      ),
    );
  }
}
