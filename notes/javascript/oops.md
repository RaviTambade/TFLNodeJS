# OOP in JavaScript

## *A Transflower Mentor Story using Employees*

> *“Let me tell you a story — not of objects and classes, but of people, roles, and responsibilities inside an organization.”*

At Transflower, we don’t start with syntax.
We start with **reality**.

And one of the best realities to model software is an **organization**.

## 🌱 Chapter 1: The Blueprint — **Employee (Class & Instance)**

Every organization begins with a basic idea:

> *“What is an Employee?”*

An employee has:

* a name
* an ID
* a basic responsibility: **work**

That’s your **class** — the blueprint.

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
    return 0; // base employee has no salary logic
  }
}
```

Now comes the real person — the **instance**.

```javascript
const emp1 = new Employee(101, "Ravi");
console.log(emp1.getDetails());
```

> 🎓 **Mentor Insight**
> A **class** is an idea.
> An **object** is a real employee working in the system.

## 🧬 Chapter 2: The Bloodline — **Inheritance (SalesEmployee)**

Now reality deepens.

A **SalesEmployee** *is still an Employee* —
but with **extra responsibility**: sales + commission.

> *Why rewrite Employee logic again?*
> We **inherit** it.

```javascript
class SalesEmployee extends Employee {
  constructor(id, name, salesAmount) {
    super(id, name); // inherit identity
    this.salesAmount = salesAmount;
  }

  calculateSalary() {
    const baseSalary = 20000;
    const commission = this.salesAmount * 0.05;
    return baseSalary + commission;
  }
}
```

Usage:

```javascript
const salesEmp = new SalesEmployee(201, "Anita", 500000);
console.log(salesEmp.getDetails());
console.log("Salary:", salesEmp.calculateSalary());
```

> 🧠 **Lesson**
> `extends` = *IS-A relationship*
> A SalesEmployee **IS an Employee**, not a separate thing.

## 👑 Chapter 3: The Leadership Layer — **SalesManager (Multilevel Inheritance)**

A **SalesManager** is:

* an Employee
* who manages sales
* who leads a team
* who gets incentives

This is **real hierarchy**.

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
```

Usage:

```javascript
const manager = new SalesManager(301, "Suresh", 1000000, 5);
console.log(manager.getDetails());
console.log("Salary:", manager.calculateSalary());
```

> 🎯 **Transflower Thinking**
> OOP is not about depth of inheritance.
> It’s about **clarity of responsibility**.

## 🔐 Chapter 4: The Locked Drawer — **Encapsulation**

In real companies:

* Salary logic is internal
* Sensitive data is protected

JavaScript supports this with **private fields**.

```javascript
class SecureEmployee {
  #salary; // private

  constructor(name, salary) {
    this.name = name;
    this.#salary = salary;
  }

  getSalarySlip() {
    return `${this.name}'s salary processed`;
  }
}
```

```javascript
const emp = new SecureEmployee("Meena", 50000);
console.log(emp.getSalarySlip());
// console.log(emp.#salary); ❌ Error
```

> 🕶️ **Encapsulation Rule**
> Data + behavior stay together
> Access only through **controlled methods**

## 🎭 Chapter 5: One Policy, Many Roles — **Polymorphism**

HR asks:

> *“Calculate salary for all employees.”*

They don’t care *how* — they care about **results**.

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

Same method name.
Different behavior.

> 🔁 **Polymorphism**
> One message → many implementations
> System stays flexible.

## 🎛️ Chapter 6: The Interface Illusion — **Abstraction**

The payroll system doesn’t know:

* commission logic
* bonus logic
* leadership incentives

It only knows:

```javascript
employee.calculateSalary();
```

That’s abstraction.

> 🧩 **Abstraction Principle**
> *Hide complexity. Expose purpose.*

## 🧠 Final Knowledge Scroll — OOP Essentials (Employee View)

| OOP Concept   | JavaScript Example                         | Business Meaning         |
| ------------- | ------------------------------------------ | ------------------------ |
| Class         | `class Employee {}`                        | Role definition          |
| Object        | `new SalesEmployee()`                      | Real employee            |
| Inheritance   | `extends Employee`                         | Organizational hierarchy |
| Encapsulation | `#salary`, methods                         | HR data protection       |
| Abstraction   | `calculateSalary()`                        | Payroll interface        |
| Polymorphism  | Same method, different salary calculations | Role-based behavior      |

## 🧙 Transflower Mentor’s Closing Words

> *“Good software looks like a good organization.”*

* Clear roles
* Clear responsibilities
* Minimal duplication
* Controlled access
* Flexible growth

JavaScript OOP is not about **syntax mastery**.
It’s about **thinking like a system designer**.

And once you can model an organization…
you can model **any real-world problem** 🌱