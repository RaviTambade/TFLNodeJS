
# 🧪 Lab 4: Object-Oriented Programming with Inheritance & Polymorphism (HR Domain)
Below is the **JavaScript (ES6 / Node.js) conversion** of your **Lab 4**, keeping the **same HR domain, same hierarchy, and same learning outcomes**, just mapped correctly to JavaScript’s OOP model.

## 🎯 Lab Title

**Designing an Employee Hierarchy using Abstraction, Inheritance, and Polymorphism (JavaScript)**


## 🎯 Lab Objective

By the end of this lab, students will be able to:

* Understand JavaScript’s **object model**
* Simulate **abstraction** using base classes
* Implement **inheritance** using `extends`
* Use **method overriding**
* Apply **constructor chaining** using `super()`
* Demonstrate **runtime polymorphism**
* Model a **real-world HR system**


## 🧠 Concepts Covered (JavaScript Mapping)

| C# Concept         | JavaScript Equivalent                 |
| ------------------ | ------------------------------------- |
| Object class       | `Object` (implicit root)              |
| abstract class     | Base class + enforced method override |
| virtual / override | Method overriding                     |
| base() constructor | `super()`                             |
| Polymorphism       | Base reference → derived object       |
| ToString()         | `toString()`                          |
| GetType()          | `constructor.name`                    |

## 🏗 System Design Overview

```
Object
  |
Employee (Base Class)
  |
SalesEmployee
  |
SalesManager
```

📌 **Real-world mapping**

* `Employee` → Generic HR identity
* `SalesEmployee` → Employee with sales targets
* `SalesManager` → Senior role with bonus


## 📁 Step 1: Create a New Node.js Project

```cmd
mkdir HRApp
cd HRApp
npm init -y
```

## 📁 Step 2: Create HR Folder and Files

```cmd
mkdir HR
```

Create files:

```
HR/Employee.js
HR/SalesEmployee.js
HR/SalesManager.js
Program.js
```

## 🧩 Step 3: Implement `Employee` (Base Class)

📄 **HR/Employee.js**

```js
class Employee {
    constructor(
        id, firstName, lastName, email,
        contactNumber, location, birthDate
    ) {
        if (new.target === Employee) {
            throw new Error("Employee is an abstract class and cannot be instantiated");
        }

        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contactNumber = contactNumber;
        this.location = location;
        this.birthDate = birthDate;
    }

    // Abstract method
    doWork() {
        throw new Error("doWork() must be implemented by derived classes");
    }

    // Virtual method
    computePay() {
        return 0;
    }

    toString() {
        return `Employee [${this.constructor.name}]
Id: ${this.id}
Name: ${this.firstName} ${this.lastName}
Email: ${this.email}
Location: ${this.location}`;
    }
}

module.exports = Employee;
```

📌 **Teaching Insight**

> JavaScript does not have `abstract` keyword.
> We **enforce abstraction by throwing errors** in base class methods.


## 🧩 Step 4: Implement `SalesEmployee` (Inheritance + Override)

📄 **HR/SalesEmployee.js**

```js
const Employee = require("./Employee");

class SalesEmployee extends Employee {
    constructor(
        id, firstName, lastName, email,
        contactNumber, location, birthDate,
        incentive, target, achievedTarget,
        basicSalary, hra
    ) {
        super(id, firstName, lastName, email, contactNumber, location, birthDate);

        this.incentive = incentive;
        this.target = target;
        this.achievedTarget = achievedTarget;
        this.basicSalary = basicSalary;
        this.hra = hra;
    }

    doWork() {
        console.log(`${this.firstName} is selling products and meeting clients.`);
    }

    computePay() {
        let totalSalary = this.basicSalary + this.hra;
        if (this.achievedTarget >= this.target) {
            totalSalary += this.incentive;
        }
        return totalSalary;
    }
}

module.exports = SalesEmployee;
```

📌 **Business Rule**

* Incentive only if **target is achieved**
* Salary = Basic + HRA + Incentive (conditional)


## 🧩 Step 5: Implement `SalesManager` (Multi-level Inheritance)

📄 **HR/SalesManager.js**

```js
const SalesEmployee = require("./SalesEmployee");

class SalesManager extends SalesEmployee {
    constructor(
        id, firstName, lastName, email,
        contactNumber, location, birthDate,
        incentive, target, achievedTarget,
        basicSalary, hra, bonus
    ) {
        super(
            id, firstName, lastName, email,
            contactNumber, location, birthDate,
            incentive, target, achievedTarget,
            basicSalary, hra
        );

        this.bonus = bonus;
    }

    doWork() {
        console.log(`${this.firstName} is managing the sales team and strategy.`);
    }

    computePay() {
        return super.computePay() + this.bonus;
    }
}

module.exports = SalesManager;
```

📌 **Design Insight**

> Managers **reuse base salary logic** and simply extend it.

---

## ▶ Step 6: Demonstrate Polymorphism (`Program.js`)

📄 **Program.js**

```js
const SalesEmployee = require("./HR/SalesEmployee");
const SalesManager = require("./HR/SalesManager");

let emp1 = new SalesEmployee(
    1, "Amit", "Sharma", "amit@company.com",
    "9999999999", "Mumbai",
    new Date(1995, 4, 12),
    1000, 5000, 20000,
    100000, 120000
);

let emp2 = new SalesManager(
    2, "Neha", "Patil", "neha@company.com",
    "8888888888", "Pune",
    new Date(1990, 2, 22),
    1500, 7000, 30000,
    200000, 250000, 10000
);

// Polymorphism
emp1.doWork();
emp2.doWork();

console.log(emp1.toString());
console.log("Salary:", emp1.computePay());

console.log(emp2.toString());
console.log("Salary:", emp2.computePay());
```

## 🧪 Step 7: Run the Application

```cmd
node Program.js
```

## 🧠 Expected Learning Output

Students will observe:

* Same method call → **different behavior**
* Base reference → **derived object**
* Runtime decision of `doWork()` and `computePay()`

📌 **This is RUNTIME POLYMORPHISM**

## 🧠 Concept Mapping (C# → JavaScript)

| Concept              | Where Seen                               |
| -------------------- | ---------------------------------------- |
| Abstraction          | Error-enforced base class (`Employee`)   |
| Inheritance          | `extends`                                |
| Polymorphism         | `SalesEmployee` / `SalesManager` objects |
| Constructor chaining | `super()`                                |
| Method overriding    | `computePay()` / `doWork()`              |
| Object class         | `toString()` / `constructor.name`        |


## 📝 Lab Assignments (JavaScript Version)

1. Add a new class `HRManager`

   * Extra allowance
   * Custom `doWork()`
2. Implement `equals(emp)` method in `Employee`
3. Print runtime type using `this.constructor.name`
4. Convert salary calculation to use **BigInt or Number precision handling**


> “Languages change.
> Syntax changes.
> **Object-oriented thinking does not.**
