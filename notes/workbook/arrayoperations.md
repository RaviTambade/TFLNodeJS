# 🧭 Student Workbook: Mastering JavaScript Arrays

## *Banking Account Management Domain*


## 🎯 Workbook Purpose

This workbook helps you **understand JavaScript array functions by mapping them to real banking operations**.

Instead of thinking in terms of fruits or numbers, you will think like a **banking system designer** handling:

* Customer accounts
* Transactions
* Balances
* Reports

> **Transflower Learning Rule:**
> *Code is meaningful only when it models reality.*

## 🏦 Banking Context Used Throughout

We will work with:

* **Accounts Array** → list of customer accounts
* **Transactions Array** → deposits, withdrawals, transfers

```javascript
let accounts = [
  { accNo: 101, name: "Ravi", balance: 50000 },
  { accNo: 102, name: "Anita", balance: 120000 },
  { accNo: 103, name: "Suresh", balance: 30000 }
];
```


## 📦 Chapter 1: Creating Account Collections

### 🧺 Array Literals (Most Common in Banking Apps)

```javascript
let transactions = [
  { type: "deposit", amount: 10000 },
  { type: "withdraw", amount: 5000 }
];
```

🧠 **Banking Insight**
Arrays represent **daily transaction logs** or **customer lists**.


### 🧪 Array Constructor (Rare but Useful)

```javascript
let monthlyStatements = new Array(12); // one slot per month
```

🎯 Used when structure is known, but data arrives later.

## 🔍 Chapter 2: Accessing Account Data

### 🗝️ Access by Index

```javascript
let firstAccount = accounts[0];
```

📌 Banking systems often process **accounts sequentially**.



### 📏 Counting Records

```javascript
let totalAccounts = accounts.length;
```

📊 Used in dashboards and reports.



## 🔄 Chapter 3: Modifying Banking Records

### ➕ Adding Accounts / Transactions

```javascript
accounts.push({ accNo: 104, name: "Meena", balance: 70000 });
```

🏦 *New customer onboarded.*


### ➖ Removing Closed Accounts

```javascript
accounts.pop();
```

⚠️ *Account closed or record archived.*

### 🛠️ Precise Updates with `splice()`

```javascript
accounts.splice(1, 1, { accNo: 102, name: "Anita", balance: 130000 });
```

🧾 *Balance corrected after reconciliation.*


## ♻️ Chapter 4: Processing Records (Iteration)

### 🔁 Reviewing Accounts (`forEach`)

```javascript
accounts.forEach(acc => {
  console.log(acc.name, acc.balance);
});
```

📋 Used during audits.


### 🧠 Transforming Data (`map`)

```javascript
let balances = accounts.map(acc => acc.balance);
```

📊 Extract data for charts.


### 🧹 Filtering Accounts (`filter`)

```javascript
let richAccounts = accounts.filter(acc => acc.balance > 50000);
```

🏦 *Premium customers list.*


### 🧮 Calculating Totals (`reduce`)

```javascript
let totalBankBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);
```

💰 *Total deposits held by bank.*


## 🕵️ Chapter 5: Searching Banking Data

### 🔎 Finding an Account

```javascript
let account = accounts.find(acc => acc.accNo === 102);
```

📌 Used in account lookup APIs.


### 📍 Finding Position

```javascript
let index = accounts.findIndex(acc => acc.accNo === 102);
```

🧠 Required before updates or deletion.


## 🔗 Chapter 6: Reports & Statements

### 🧾 Joining Data

```javascript
let names = accounts.map(acc => acc.name).join(", ");
```

📄 Used in reports and emails.


### ✂️ Slicing Data

```javascript
let topAccounts = accounts.slice(0, 2);
```

📊 Dashboard preview.


## 📦 Chapter 7: Sorting Banking Records

```javascript
accounts.sort((a, b) => b.balance - a.balance);
```

🏆 Rank customers by balance.


## 🧠 Final Summary: Array Functions in Banking

| Banking Task      | Array Method       |
| ----------------- | ------------------ |
| Store accounts    | `[]`               |
| Add transaction   | `push()`           |
| Close account     | `pop() / splice()` |
| Audit accounts    | `forEach()`        |
| Generate reports  | `map()`            |
| Premium customers | `filter()`         |
| Bank total funds  | `reduce()`         |
| Find account      | `find()`           |
| Rank customers    | `sort()`           |


## ✍️ Student Exercises

1. Find all accounts with balance below ₹40,000
2. Calculate average account balance
3. Sort accounts alphabetically by name
4. Create a mini statement using `map()`


## 🧙 Mentor’s Closing Note

> *Arrays are the backbone of banking systems.*
> *If you master arrays, you master data flow.*

🌱 *Think like a banker. Code like an engineer.*
