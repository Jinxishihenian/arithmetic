import 'package:flutter/material.dart';

// 混入类(Widget).
mixin class SearchPage {
  // 顶部筛选.
  Widget topFilterWidget({required Widget child}) {
    return Column(
      children: [
        Row(
          children: [
            Expanded(
              child: Container(
                color: Colors.blue,
                alignment: Alignment.center,
                child: Column(
                  children: [
                    RadioListTile(
                      value: 0,
                      groupValue: 0,
                      onChanged: (value) {
                        print(value);
                      },
                    ),
                    RadioListTile(
                      value: 1,
                      groupValue: 0,
                      onChanged: (value) {
                        print(value);
                      },
                    ),
                    RadioListTile(
                      value: 2,
                      groupValue: 0,
                      onChanged: (value) {
                        print(value);
                      },
                    ),
                    TextButton(
                      onPressed: () {
                        print('开始搜索吧~');
                      },
                      child: const Text('开始搜索'),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
        Expanded(
          child: child,
        ),
      ],
    );
  }

  // 侧边栏筛选.
  sidebarFilterWidget() {
    return Column(
      children: [
        const SizedBox(height: 100),
        const TextField(
          decoration: InputDecoration(
            hintText: '请输入搜索内容',
            prefixIcon: Icon(Icons.search),
          ),
        ),
        TextButton(
          onPressed: () {
            print('侧边栏搜索');
          },
          child: Text('侧边栏搜索'),
        )
      ],
    );
  }
}

// 混入类(View Modal).
mixin class SearchModule {
  //  提供ScaffoldState的key.
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();
}
