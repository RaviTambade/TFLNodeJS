# Node.js unit tests using  Mocha  and Chai*

---

### 🔍 What is **Chai**?

**Chai** is a **BDD / TDD assertion library** for Node.js and browsers that can be paired with any JavaScript testing framework.

> 💡 Simply put, **Chai is used to write test assertions** — statements that check whether your code behaves as expected.

---

### 🧪 Where Chai Fits in Testing

| Component | Role                                                    |
| --------- | ------------------------------------------------------- |
| **Mocha** | Test runner (runs your tests)                           |
| **Chai**  | Assertion library (checks values & conditions in tests) |

---

### ✅ Why Use Chai?

* **Readable syntax** (almost like English!)
* **Supports different styles** of assertions:

  * **Expect**: `expect(value).to.equal(42);`
  * **Should**: `value.should.equal(42);`
  * **Assert**: `assert.equal(value, 42);`

You can choose whichever style you prefer.

---

### 📦 Installation

```bash
npm install --save-dev chai
npm install --save-dev mocha  # (if you haven't already)
```

---

### 📁 Example Project Structure

```
/my-project
  /test
    sample.test.js
  app.js
  package.json
```

---

### 🧾 Sample Code

#### `app.js`

```js
function add(a, b) {
  return a + b;
}
module.exports = { add };
```

#### `test/sample.test.js`

```js
const { expect } = require('chai');
const { add } = require('../app');

describe('Addition Function', () => {
  it('should return 5 when 2 + 3 is passed', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should return 0 when -2 + 2 is passed', () => {
    expect(add(-2, 2)).to.equal(0);
  });
});
```

---

### ▶️ Run the Test

In `package.json`:

```json
"scripts": {
  "test": "mocha"
}
```

Then run:

```bash
npm test
```

- 