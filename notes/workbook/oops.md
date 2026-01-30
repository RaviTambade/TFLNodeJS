# 🏦 Student Workbook

## Mastering OOP in JavaScript

### *A Transflower Mentor Story using Employees*

*(Transflower Learning Framework – Student Edition)*


## 🎯 Module Purpose

This workbook introduces **Object-Oriented Programming (OOP)** concepts in JavaScript using **employees, roles, and responsibilities** in a company. Students will learn:

* Classes & Objects
* Inheritance
* Encapsulation
* Polymorphism
* Abstraction

All concepts are tied to **Banking Account Management or organizational employee models**.


## 🧠 Learning Outcomes

By completing this workbook, students will be able to:

* Explain OOP principles using real-world employee scenarios
* Design classes and create instances for a banking system
* Implement inheritance for specialized employees
* Use encapsulation to protect sensitive data
* Apply polymorphism and abstraction in payroll workflows


## 🌼 Transflower Learning Lens

> *"OOP models reality — people, roles, and responsibilities."*

Mapping to banking systems:

* Employee class → Bank account holder
* SalesEmployee → Account officer with sales targets
* Manager → Branch manager or team lead
* Payroll system → Banking salary computation or transactions system


## 🌱 Chapter 1: The Blueprint — Employee (Class & Instance)

### Banking Analogy

Every bank account holder has:

* Name
* Account Number (ID)
* Actions like deposit, withdraw

### Example

```javascript
class Employee {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  getDetails() {
    return `Employee [${this.id}] : ${this.name}`;
  }

  calculateSalary() {
    return 0;
  }
}

const emp1 = new Employee(101, "Ravi");
console.log(emp1.getDetails());
```

### ✍️ Exercise

Create a class **BankCustomer** with fields: accountNumber, name, and a method checkBalance().


## 🧬 Chapter 2: The Bloodline — Inheritance (SalesEmployee)

### Banking Analogy

A **SalesEmployee** = account officer who manages transactions and earns commission.

### Example

```javascript
class SalesEmployee extends Employee {
  constructor(id, name, salesAmount) {
    super(id, name);
    this.salesAmount = salesAmount;
  }

  calculateSalary() {
    const baseSalary = 20000;
    const commission = this.salesAmount * 0.05;
    return baseSalary + commission;
  }
}

const salesEmp = new SalesEmployee(201, "Anita", 500000);
console.log(salesEmp.getDetails());
console.log("Salary:", salesEmp.calculateSalary());
```

### ✍️ Reflection

Explain why inheritance reduces code duplication in a payroll system.


## 👑 Chapter 3: Leadership Layer — SalesManager (Multilevel Inheritance)

### Banking Analogy

A **SalesManager** supervises multiple account officers and earns leadership bonus.

### Example

```javascript
class SalesManager extends SalesEmployee {
  constructor(id, name, salesAmount, teamSize) {
    super(id, name, salesAmount);
    this.teamSize = teamSize;
  }

  calculateSalary() {
    const base = super.calculateSalary();
    const leadershipBonus = this.teamSize * 1000;
    return base + leadershipBonus;
  }
}

const manager = new SalesManager(301, "Suresh", 1000000, 5);
console.log(manager.getDetails());
console.log("Salary:", manager.calculateSalary());
```

### ✍️ Exercise

Design a **BranchManager** class for a banking system with teamSize and bonus calculation.


## 🔐 Chapter 4: Encapsulation — Protecting Sensitive Data

### Banking Analogy

* Salary, PIN, and balance are private
* Access through controlled methods

### Example

```javascript
class SecureEmployee {
  #salary;
  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  getSalarySlip() {
    return `${this.name}'s salary processed`;
  }
}

const emp = new SecureEmployee("Meena", 50000);
console.log(emp.getSalarySlip());
// console.log(emp.#salary); ❌ Error
```

### ✍️ Reflection

Why is encapsulation crucial in banking software?

## 🎭 Chapter 5: Polymorphism — One Policy, Many Roles

### Banking Analogy

HR calculates salary for all employees regardless of role.

### Example

```javascript
const staff = [
  new Employee(1, "Temp"),
  new SalesEmployee(2, "Riya", 300000),
  new SalesManager(3, "Amit", 800000, 4)
];

staff.forEach(emp => {
  console.log(emp.calculateSalary());
});
```

### ✍️ Exercise

Add a **BankTeller** class and show polymorphic salary calculation.


## 🎛️ Chapter 6: Abstraction — Interface Illusion

### Banking Analogy

Payroll system only knows to call calculateSalary(), not internal logic.

### Example

```javascript
employee.calculateSalary(); // hides internal bonus/commission calculations
```

### ✍️ Reflection

Explain why abstraction simplifies banking software maintenance.


## 🧠 OOP Essentials Summary (Employee View)

| OOP Concept   | JavaScript Example                         | Banking Meaning                            |
| ------------- | ------------------------------------------ | ------------------------------------------ |
| Class         | `class Employee {}`                        | Role definition (Bank Customer / Employee) |
| Object        | `new SalesEmployee()`                      | Real employee or account holder            |
| Inheritance   | `extends Employee`                         | Hierarchy / Specialized roles              |
| Encapsulation | `#salary`, methods                         | Protect sensitive banking info             |
| Abstraction   | `calculateSalary()`                        | Payroll / service interface                |
| Polymorphism  | Same method, different salary calculations | Different roles, same operation            |


## 🌟 Mentor’s Closing Words

> *“Good software mirrors a good organization.”*

* Clear roles
* Clear responsibilities
* Minimal duplication
* Controlled access
* Flexible growth

### ✍️ Final Exercise

Model a **BankAccount** class with subclasses:

* SavingsAccount
* CurrentAccount
* LoanAccount
  Include methods for deposit, withdraw, and interest calculation.

