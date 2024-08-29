class CirclePainter extends CustomPainter {
  final Matrix4 transformMatrix;
  final Offset center;
  final double radius;

  CirclePainter(
      {required this.transformMatrix,
      required this.center,
      required this.radius});

  @override
  void paint(Canvas canvas, Size size) {
    // 创建缩放矩阵
    Matrix4 scaleMatrix = Matrix4.identity()..scale(1.0, 1.0);

    // 应用缩放矩阵
    canvas.transform(scaleMatrix.storage);
    // 保存 Canvas 状态
    canvas.save();
    // 应用变换矩阵
    canvas.transform(transformMatrix.storage);

    // 绘制圆形
    Paint paint = Paint()
      ..color = Colors.red
      ..style = PaintingStyle.fill;

    canvas.drawCircle(center, radius, paint);
    // 恢复 Canvas 状态
    canvas.restore();
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}

Matrix4 convertToMatrix4(List<double> matrix2D) {
  if (matrix2D.length != 6) {
    throw ArgumentError('The input list must have exactly 6 elements.');
  }

  double a = matrix2D[0];
  double b = matrix2D[1];
  double c = matrix2D[2];
  double d = matrix2D[3];
  double tx = matrix2D[4];
  double ty = matrix2D[5];

  // 返回转换后的 Matrix4
  return Matrix4(
      a,
      b,
      0.0,
      0,
      // 第一列
      c,
      d,
      0.0,
      0,
      // 第二列
      0.0,
      0.0,
      1.0,
      0.0,
      // 第三列
      tx,
      ty,
      0.0,
      1.0 // 第四列
      );
}