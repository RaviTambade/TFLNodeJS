# 📚 JavaScript Data Types

> *“Let’s travel through the kingdom of JavaScript — where every value wears a crown and every data type has a tale.”*

## 🧱 The Foundation: Two Great Kingdoms

In JavaScript, all values belong to one of **two kingdoms**:

1. **Primitive Types** – The simple and straightforward nobles.
2. **Non-Primitive Types** – The complex and structured citizens.

Let’s meet them one by one.

## 🏰 1. Primitive Data Types

> *“These are like atoms — small, indivisible, and immutable.”*

### 🔢 Number

> *“The ruler of mathematics in JavaScript.”*

```javascript
let age = 30;
let pi = 3.14;
```

Whether it's `1`, `-5`, or `3.1415`, it's all the same type: `Number`.

### 📝 String

> *“The poet of JavaScript — loves to talk.”*

```javascript
let name = "Alice";
let greeting = 'Hello, world!';
```

Strings can be wrapped in `'single'`, `"double"` or \`backticks\` (for templates).
Words, sentences, names — all belong here.

### ✅ Boolean

> *“The gatekeeper — allows only `true` or `false`.”*

```javascript
let isLoggedIn = true;
let hasAccess = false;
```

They answer only Yes or No. Useful for conditions and decisions.

### ❓ Undefined

> *“The mysterious one — not yet defined.”*

```javascript
let answer;
console.log(answer); // undefined
```

If you declare a variable but don’t assign it — it’s `undefined`. Like a chair with no label.

### 🚫 Null

> *“The intentional nothingness.”*

```javascript
let data = null;
```

This isn’t “not assigned” — it means “intentionally empty.” A clear sign: *nothing should be here.*

### 🧿 Symbol (ES6+)

> *“The secret code — always unique.”*

```javascript
const id = Symbol("userID");
```

Even if two Symbols have the same description, they’re never equal.
Used to create **unique keys** in objects — like hidden treasure.

## 🧩 2. Non-Primitive (Reference) Data Types

> *“These are made of many parts — like buildings or machines.”*

### 🧍 Object

> *“The all-rounder — stores key-value pairs.”*

```javascript
let person = {
  name: "John",
  age: 25
};
```

Objects can store **anything**: numbers, strings, arrays, functions — all inside curly braces.

### 📦 Array

> *“The list-keeper.”*

```javascript
let colors = ["red", "green", "blue"];
```

Arrays are ordered collections. Useful when you want to store multiple items under one name.

### 🧠 Function

> *“The magician — performs tasks when summoned.”*

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}
```

Functions are reusable spells — define once, use many times.

### 📅 Date

> *“The time traveler.”*

```javascript
let now = new Date();
```

You can get today’s date, the current time, or travel to any point in time.

---

## ⚖️ Dynamic Typing: JavaScript’s Flexibility

> *“In this land, you don’t choose your type — your value does.”*

```javascript
let data = 42;       // Number
data = "Forty two";  // Now a String
```

In JavaScript, the **type is determined at runtime**. One variable can hold different types at different times.

## 🧠 Summary Table

| Type      | Example                      | Category      |
| --------- | ---------------------------- | ------------- |
| Number    | `let n = 10;`                | Primitive     |
| String    | `let s = "Hi";`              | Primitive     |
| Boolean   | `let b = true;`              | Primitive     |
| Undefined | `let x;`                     | Primitive     |
| Null      | `let y = null;`              | Primitive     |
| Symbol    | `let sym = Symbol("id");`    | Primitive     |
| Object    | `let obj = { name: "Bob" };` | Non-Primitive |
| Array     | `let arr = [1, 2, 3];`       | Non-Primitive |
| Function  | `function sayHi() {}`        | Non-Primitive |
| Date      | `let now = new Date();`      | Non-Primitive |

## 🎓 Final Words from the Mentor

> *“Know your data types as you know your tools. Use the right one for the right job, and JavaScript will reward you with flexibility, power, and elegance.”*

Remember:

* Understand the **difference between primitive and reference** types.
* Be mindful of **type coercion** and **dynamic typing**.
* Practice with real examples — **play, break, learn**.

Happy coding! 🌟

