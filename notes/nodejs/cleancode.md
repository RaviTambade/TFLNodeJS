# Clean Code & Easy Readability
Clean Code and Easy readability hits at the core of writing professional, maintainable Node.js (or any language) applications.

## ✅ **Best Practice #4: Clean Code & Easy Readability**

### 🔧 **1. Linting & Formatting**

#### ✔ Tools to Use

* **ESLint** – Linter for catching bugs, enforcing rules.
* **Prettier** – Opinionated code formatter.
* **VSCode Extensions** – ESLint + Prettier integrations available.

#### ✅ Recommended Setup:

Install:

```bash
npm install eslint prettier eslint-config-prettier eslint-plugin-prettier --save-dev
```

`.eslintrc.json`:

```json
{
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "env": {
    "node": true,
    "es2021": true
  },
  "rules": {
    "no-unused-vars": "warn",
    "semi": ["error", "always"]
  }
}
```

`.prettierrc`:

```json
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2
}
```

VSCode settings:

```json
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

---

### 🧑‍🎨 **2. Style Guides**

#### 🔥 Popular Guides

* [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
* [Google JS Style Guide](https://google.github.io/styleguide/jsguide.html)
* [StandardJS](https://standardjs.com/)

Use with ESLint:

```bash
npx install-peerdeps --dev eslint-config-airbnb-base
```

In `.eslintrc.json`:

```json
"extends": ["airbnb-base"]
```

---

### 💬 **3. Intelligent Comments**

#### ✅ Good Commenting Practices:

* Comment **why**, not just what.
* Avoid stating the obvious.
* Prefer self-explanatory code **+ minimal comments**.

#### 📌 Example:

```js
// ❌ Bad
let x = 5; // Set x to 5

// ✅ Good
// Using a default timeout for retry mechanism
let retryTimeout = 5000;
```

---

### 📝 **4. Use JSDoc for Auto-Documentation**

#### Install JSDoc

```bash
npm install --save-dev jsdoc
```

#### Sample JSDoc Comment

```js
/**
 * Calculates total price with tax.
 * @param {number} price - Base price.
 * @param {number} tax - Tax rate in decimal.
 * @returns {number} Total amount with tax.
 */
function calculateTotal(price, tax) {
  return price * (1 + tax);
}
```

Then run:

```bash
npx jsdoc yourFile.js
```

---

### 🚀 Benefits

* Easier team collaboration.
* Cleaner version control diffs.
* Faster debugging and onboarding.
* Higher code quality and fewer bugs.

---

