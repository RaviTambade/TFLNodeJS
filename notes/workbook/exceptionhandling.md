# 🏦 Student Workbook: Exception Handling in JavaScript

## *Account Management System Domain*


## 🌱 Workbook Purpose

In banking software, **failure is not optional — it must be handled gracefully**.
This workbook helps you learn **JavaScript exception handling** by mapping it to **real account management scenarios** such as invalid accounts, insufficient balance, system errors, and fraud detection.

> **Transflower Principle:** *A good system does not crash — it responds responsibly.*

## 🧭 Chapter 1: What Is an Exception? (Banking View)

In a bank, things can go wrong:

* Account number does not exist
* Balance is insufficient
* Withdrawal limit exceeded
* System service unavailable

In JavaScript, these **unexpected situations** are called **exceptions**.

```javascript
console.log("Transaction started");
console.log(balance / amount); // what if amount is 0?
console.log("Transaction completed");
```

🧠 **Banking Insight**
If errors are not handled, transactions may stop midway — causing **data inconsistency**.


## 🚨 Chapter 2: The `try...catch` Block — Banking Safety Net

### 🛡️ Scenario: Withdrawal Processing

```javascript
function withdraw(balance, amount) {
  try {
    if (amount <= 0) {
      throw new Error("Invalid withdrawal amount");
    }
    if (amount > balance) {
      throw new Error("Insufficient balance");
    }
    balance -= amount;
    console.log("Withdrawal successful. Balance:", balance);
  } catch (error) {
    console.error("Transaction Failed:", error.message);
  }
}

withdraw(5000, 7000);
```

**Banking Meaning**

* `try` → Execute transaction
* `throw` → Raise business rule violation
* `catch` → Graceful failure handling

✍️ **Student Exercise**

* Add a rule for *minimum balance maintenance*.


## 🧹 Chapter 3: The `finally` Block — Mandatory Cleanup

Banks always:

* log transactions
* release locks
* generate audit trails

```javascript
function processTransaction() {
  try {
    console.log("Processing transaction...");
    throw new Error("Network failure");
  } catch (err) {
    console.log("Error occurred:", err.message);
  } finally {
    console.log("Audit log updated");
  }
}

processTransaction();
```

🧠 **Key Rule**
`finally` runs **no matter what** — success or failure.

---

## 🧑‍⚖️ Chapter 4: Business Exceptions vs System Exceptions

### 🏦 Business Rule Exception

```javascript
throw new Error("Account is frozen");
```

### ⚙️ System Exception

```javascript
throw new Error("Database connection failed");
```

📌 **Banking Reality**

* Business errors → show to user
* System errors → log internally

## 🏷️ Chapter 5: Custom Error Types (Domain-Driven)

```javascript
class InsufficientBalanceError extends Error {
  constructor(message) {
    super(message);
    this.name = "InsufficientBalanceError";
  }
}

function withdraw(balance, amount) {
  if (amount > balance) {
    throw new InsufficientBalanceError("Not enough funds");
  }
  return balance - amount;
}

try {
  withdraw(3000, 5000);
} catch (e) {
  console.log(e.name + ": " + e.message);
}
```

🎯 **Why Custom Errors?**

* Clear intent
* Better debugging
* Clean domain logic

## 🔄 Chapter 6: Exception Handling in Functions & Services

```javascript
function transfer(fromBalance, toBalance, amount) {
  try {
    if (amount <= 0) throw new Error("Invalid transfer amount");
    if (amount > fromBalance) throw new Error("Insufficient funds");

    fromBalance -= amount;
    toBalance += amount;

    return { fromBalance, toBalance };
  } catch (err) {
    return { error: err.message };
  }
}
```

🧠 **Service Rule**
Never allow exceptions to leak without meaning.

## 🚨 Chapter 7: Exception Handling & Security

```javascript
try {
  authenticateUser();
} catch {
  console.log("Authentication failed");
}
```

🔐 **Security Principle**
Never expose sensitive system details to end users.


## 📜 Final Summary: Exception Handling (Banking Perspective)

| Concept       | JavaScript    | Banking Meaning         |
| ------------- | ------------- | ----------------------- |
| Detection     | `try`         | Attempt transaction     |
| Raise         | `throw`       | Business rule violation |
| Handling      | `catch`       | Graceful recovery       |
| Cleanup       | `finally`     | Audit & logging         |
| Custom Errors | `class Error` | Domain clarity          |


## 🧙 Transflower Mentor’s Closing Words

> *“A transaction that fails silently is more dangerous than one that fails loudly and clearly.”*

Exception handling is not about errors —
it’s about **trust**.

Master it, and your systems will earn confidence — from users, auditors, and the future 🌱
