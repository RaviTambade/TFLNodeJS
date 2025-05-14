Great! Let's clearly list and explain all the **dependency modules** used in your Node.js CRUD app for:

* ✅ **API development**
* 🧪 **Unit testing**
* 📊 **Test coverage (optional)**

---

## ✅ 1. **Dependencies for REST API**

These are runtime dependencies — needed when your app runs:

| Module    | Purpose                                                      |
| --------- | ------------------------------------------------------------ |
| `express` | Web framework to define routes and handle requests/responses |

### Installation:

```bash
npm install express
```

---

## 🧪 2. **DevDependencies for Unit Testing**

These are **only needed for development** (during testing):

| Module                   | Purpose                                                         |
| ------------------------ | --------------------------------------------------------------- |
| `mocha`                  | Test runner to define and execute test cases                    |
| `chai`                   | Assertion library to write human-readable test assertions       |
| `supertest`              | HTTP testing library to simulate API requests to Express routes |
| `chai-http` *(optional)* | An alternative to Supertest (can test APIs with Chai syntax)    |

### Installation:

```bash
npm install --save-dev mocha chai supertest
```

> 💡 You can skip `chai-http` if you're already using `supertest`.

---

## 📊 3. **Optional: Test Coverage Reporting**

If you want **code coverage reports**, use `nyc`, which works with Mocha:

| Module | Purpose                                                |
| ------ | ------------------------------------------------------ |
| `nyc`  | Command-line tool for generating test coverage reports |

### Installation:

```bash
npm install --save-dev nyc
```

### Usage:

In your `package.json`:

```json
"scripts": {
  "test": "mocha",
  "coverage": "nyc mocha"
}
```

Run:

```bash
npm run coverage
```

Output will show how much of your code is tested.

---

## ✅ Summary: `package.json` Scripts Section

```json
"scripts": {
  "start": "node app.js",
  "test": "mocha",
  "coverage": "nyc mocha"
}
```

---

## 📦 Final Module List

```bash
npm install express

npm install --save-dev mocha chai supertest nyc
```

---

Would you like me to generate a sample `package.json` file or show the coverage report format too?
