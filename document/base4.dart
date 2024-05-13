main() {
  EmployeeDate employeeDate = EmployeeDate();
  EmployeeSave employeeSave = EmployeeSave();
  PayCalculator payCalculator = PayCalculator();
  PayReporter payReporter = PayReporter();
  // 保存员工信息.
  employeeSave.save(employeeDate);
  // 计算工资.
  payCalculator.calculatePay(employeeDate);
  // 计算工作时长.
  payReporter.reportHours(employeeDate);

  EmployeeFacade employeeFacade = EmployeeFacade();
  // 保存员工信息.
  employeeFacade.save();
  // 计算工资.
  employeeFacade.calculatePay();
  // 计算工作时长.
  employeeFacade.reportHours();
}

/// 雇员.
class Employee {
  int hoursWorked = 10;

  /// 公共函数(计算正常工作时数).
  int regularHours() {
    // print('工作了10s');
    /// 修改regularHours会同时影响calculatePay,reportHours.
    return hoursWorked;
  }

  /// 计算工资(CFO财务部门使用).
  calculatePay() {
    regularHours();
  }

  /// 报告时间(COO人力资源部门使用).
  reportHours() {
    regularHours();
  }

  /// 保存(CTO技术部门使用).
  save() {}
}

class EmployeeDate {
  /// 工作总时长.
  int hoursWorked = 10;
}

class PayCalculator {
  /// 计算工资.
  calculatePay(EmployeeDate employeeDate) {
    print(employeeDate.hoursWorked * 250);
  }
}

class PayReporter {
  /// 报告时间.
  reportHours(EmployeeDate employeeDate) {
    print(employeeDate.hoursWorked);
  }
}

class EmployeeSave {
  /// 保存.
  save(EmployeeDate employeeDate) {
    print('保存${employeeDate}');
  }
}

class EmployeeFacade {
  EmployeeDate employeeDate = EmployeeDate();
  EmployeeSave employeeSave = EmployeeSave();
  PayCalculator payCalculator = PayCalculator();
  PayReporter payReporter = PayReporter();

  // 保存员工信息.
  save() {
    employeeSave.save(employeeDate);
  }

  // 计算工资.
  calculatePay() {
    payCalculator.calculatePay(employeeDate);
  }

  // 计算工作时长.
  reportHours() {
    payReporter.reportHours(employeeDate);
  }
}
