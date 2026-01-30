# 🏦 Student Workbook

## Callbacks, Promises & Async/Await

### *Understanding Time & Waiting in Banking Account Management Systems*

*(Transflower Learning Framework – Student Edition)*



## 🎯 Module Purpose

In banking systems, **nothing happens instantly**:

* Balance checks take time
* Fund transfers need validation
* OTP verification involves waiting
* Server responses are asynchronous

This workbook helps you understand **how JavaScript handles waiting** using:

* Callbacks
* Promises
* Async / Await

All concepts are explained using **Banking Account Management scenarios**.


## 🧠 Learning Outcomes

By the end of this module, you will be able to:

* Explain why banking applications must be non-blocking
* Understand callbacks as the first async pattern
* Use Promises to structure asynchronous banking workflows
* Write clean async/await code for real-world banking APIs
* Handle success and failure scenarios gracefully



## 🌼 Transflower Learning Lens

> *"Banking software must wait responsibly without stopping the system."*

This maps to:

**Customer Request → Waiting → System Response**

Which maps in JavaScript to:

**Async Call → Event Loop → Callback / Promise / Await**



## 🕰️ Why Asynchronous Programming Matters in Banking

### Banking Reality

Imagine a bank where:

* The entire branch freezes while one customer withdraws money

❌ That bank would collapse.

### Software Reality

JavaScript applications must:

* Continue serving other users
* While waiting for slow operations

Examples:

* Database calls
* Network requests
* Payment gateway responses



## 🔁 Concept 1: Callbacks

### *The First Async Banking Pattern*

### Banking Analogy

You submit a request:

> "Once the balance is fetched, inform me."

That instruction is a **callback**.



### Example: Balance Fetch Using Callback

```javascript
function fetchBalance(accountNumber, callback) {
  setTimeout(() => {
    let balance = 10000;
    callback(null, balance);
  }, 1000);
}

fetchBalance("ACC101", (error, balance) => {
  if (error) return console.error("Error fetching balance");
  console.log("Balance:", balance);
});
```



### ⚠️ Callback Hell (Banking Risk)

Nested banking operations:

* Validate account
* Check balance
* Debit amount
* Update ledger

Using callbacks leads to **deep nesting**:

* Hard to read
* Hard to audit
* Error-prone

### ✍️ Reflection

Why is callback hell dangerous in banking software?



## 🌈 Concept 2: Promises

### *Structured Waiting in Banking Systems*

### Banking Analogy

> "We promise to give you the transaction result."

Every promise has three states:

* Pending
* Fulfilled
* Rejected



### Example: Balance Fetch Using Promise

```javascript
function fetchBalance(accountNumber) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10000);
    }, 1000);
  });
}

fetchBalance("ACC101")
  .then(balance => console.log("Balance:", balance))
  .catch(err => console.error("Error"));
```

### 🧩 Promise Chaining (Banking Workflow)

```javascript
validateAccount()
  .then(checkBalance)
  .then(debitAmount)
  .then(updateLedger)
  .then(generateReceipt)
  .catch(handleFailure);
```

> *"Each banking step waits for the previous one — clean and traceable."*

### ✍️ Exercise

List three banking operations that must be chained:

1. ---
2. ---
3. ---

## ✨ Concept 3: Async / Await

### *Human-Friendly Banking Code*

### Banking Analogy

A bank officer processes tasks **step by step**, even though systems work asynchronously.

### Example: Balance Fetch Using Async/Await

```javascript
async function getBalance(accountNumber) {
  try {
    let balance = await fetchBalance(accountNumber);
    console.log("Balance:", balance);
  } catch (error) {
    console.error("Error fetching balance");
  }
}
```

### 🧠 Why Async/Await is Preferred in Banking

* Code looks synchronous
* Easy audits
* Clear error handling
* Fewer bugs

### ✍️ Exercise

Rewrite a **fund transfer workflow** using async/await:

Steps:

1. Validate account
2. Check balance
3. Debit amount
4. Credit beneficiary

## ⚙️ Error Handling in Banking Async Code

### Banking Rule

> *Every failure must be handled explicitly.*

* Insufficient balance
* Invalid account
* Network failure

### Async/Await Pattern

```javascript
try {
  await debitAmount();
} catch (error) {
  logTransactionFailure(error);
}
```

## 📊 Comparison Table (Student Recall)

| Pattern     | Banking Meaning     | Strength         | Limitation            |
| ----------- | ------------------- | ---------------- | --------------------- |
| Callback    | Inform me later     | Simple           | Unmanageable at scale |
| Promise     | Guaranteed response | Structured       | Slightly verbose      |
| Async/Await | Officer-style flow  | Clean & readable | Needs try/catch       |

## 🧪 Mini Assignment

### Task

Implement a **Bank Fund Transfer Simulation**:

* Use Promises OR async/await
* Handle success & failure

## 🌱 Self-Evaluation Checklist

☐ I understand why async is required in banking
☐ I can explain callbacks in simple terms
☐ I can chain promises confidently
☐ I can write async/await with error handling
☐ I can explain this flow to a peer

## 🌼 Mentor’s Closing Note

> *"In banking systems, time is money — and async code ensures neither is wasted."*

Mastering async JavaScript prepares you for:

* Payment systems
* Notification services
* Distributed microservices

## ✅ Module Complete

### Next Recommended Module

**Error Handling & Transactions in Banking Systems
