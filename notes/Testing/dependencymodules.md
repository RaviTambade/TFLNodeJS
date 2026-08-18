#  Node.js CRUD Testing 

### Think like Transflower Developer

Imagine we are building a simple **Insurance Policy CRUD API**. A learner may ask:  “Sir, which npm modules should I install?”  I would say:**Don't start with modules. Start with responsibilities.** Our application has three different responsibilities:

```text
                    Node.js CRUD Application
                              │
             ┌────────────────┼────────────────┐
             │                │                │
             ▼                ▼                ▼
        API Development    Unit Testing    Test Coverage
             │                │                │
          express        mocha + chai      nyc
                              │
                         API Testing
                              │
                          supertest
```


## 1. `express` — Our API Engine 🚂

First, we need to build the application.

`express` gives us:

* HTTP server
* Routing
* Request handling
* Response handling
* Middleware support

Install:

```bash
npm install express
```

For example:

```javascript
const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/policies", (req, res) => {
    res.json([
        { id: 1, name: "Life Policy", premium: 5000 }
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

Here the learner should understand: **Express is not testing our application. Express is helping us build the application.** That distinction is important.


# 2. Mocha — The Test Manager 🧪

Now our API is ready. But a professional developer doesn't simply say:  “It works on my machine.” We ask: **How do I prove that it works?** That's where **Mocha** comes in.

```bash
npm install --save-dev mocha
```

Mocha is responsible for:

> **Finding and executing our test cases.**

Example:

```javascript
describe("Policy API", () => {

    it("should return policies", () => {
        // test logic
    });

});
```

Think of Mocha as the **teacher conducting the examination**.


# 3. Chai — The Assertion Language 🔍

Mocha executes the test.But we need to tell Mocha: “What result do I expect?” That's the responsibility of **Chai**.

```bash
npm install --save-dev chai
```

Example:

```javascript
const { expect } = require("chai");

expect(response.status).to.equal(200);
```

Now we have:

```text
Mocha
  │
  │ runs test
  ▼
Test Case
  │
  │ produces result
  ▼
Chai
  │
  │ checks expectation
  ▼
PASS / FAIL
```

So remember: 

> **Mocha asks: “Run the test.”**
> **Chai asks: “Is the result correct?”**


# 4. Supertest — Test the API Like a Real Client

This is where things become interesting.Suppose our API has:

```text
GET    /api/policies
GET    /api/policies/:id
POST   /api/policies
PUT    /api/policies/:id
DELETE /api/policies/:id
```

We want to test these endpoints. Instead of manually opening Postman every time, we can use **Supertest**.

```bash
npm install --save-dev supertest
```

Example:

```javascript
const request = require("supertest");
const app = require("../app");

describe("GET /api/policies", () => {

    it("should return all policies", async () => {

        const response = await request(app)
            .get("/api/policies");

        expect(response.status).to.equal(200);
    });

});
```

Now our testing architecture becomes:

```text
             Supertest
                 │
                 ▼
          HTTP Request
                 │
                 ▼
        Express Application
                 │
                 ▼
             Response
                 │
                 ▼
              Chai
                 │
                 ▼
           PASS / FAIL
```

This is much closer to how a real consumer interacts with our API.

# 5. `chai-http` — An Alternative

You may also encounter:

```bash
npm install --save-dev chai-http
```

It allows HTTP testing using Chai-style syntax. But if the team has already standardized on:

```text
Mocha + Chai + Supertest
```

you generally don't need both `supertest` and `chai-http`. So for our learning project: **Choose Supertest.**

# 6. NYC — The Test Coverage Inspector 📊

Now imagine we have written 50 tests.  The developer says:  “Sir, I have 50 test cases!” I ask: **“Good. But how much of your code did those tests actually execute?”** That's a different question.  Enter **NYC**.

```bash
npm install --save-dev nyc
```

NYC can report things such as:

```text
Statements
Branches
Functions
Lines
```

For example:

```text
----------------|---------|
File            | Coverage|
----------------|---------|
policy.js       | 92%     |
policyService.js| 87%     |
----------------|---------|
All files       | 90%     |
----------------|---------|
```

This gives us a very important engineering lesson:  **Number of tests ≠ quality of testing.**  Ten meaningful tests may be better than fifty meaningless tests.

# 7. Our Complete Development Toolkit

For our Node.js CRUD application:

```text
                    Insurance CRUD API
                           │
                           ▼
                       Express
                           │
                     REST Endpoints
                           │
                           ▼
                    ┌───────────────┐
                    │    Testing    │
                    └───────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
          Mocha                       Supertest
       Test Runner                  API Testing
             │                           │
             └─────────────┬─────────────┘
                           ▼
                         Chai
                       Assertions
                           │
                           ▼
                          NYC
                    Coverage Report
```

# 📦 Installation

For a simple Express CRUD application:

```bash
npm install express
```

For development and testing:

```bash
npm install --save-dev mocha chai supertest nyc
```

Notice the difference:

```text
dependencies
     │
     └── express
          ↓
     required at runtime


devDependencies
     │
     ├── mocha
     ├── chai
     ├── supertest
     └── nyc
          ↓
     required while developing/testing
```

# 🧪 `package.json`

A clean setup could look like:

```json
{
  "scripts": {
    "start": "node app.js",
    "test": "mocha",
    "coverage": "nyc mocha"
  }
}
```

Then:

```bash
npm start
```

runs the application.

```bash
npm test
```

runs the tests.

```bash
npm run coverage
```

runs the tests and produces coverage information.

# 🌸 The Transflower Learning

I would ask my learners to remember **five questions**, rather than memorizing five npm packages:

| Question                          | Tool        |
| --------------------------------- | ----------- |
| How do I build my REST API?       | `express`   |
| How do I execute tests?           | `mocha`     |
| How do I verify expected results? | `chai`      |
| How do I test HTTP APIs?          | `supertest` |
| How much code is covered?         | `nyc`       |

And the bigger lesson is this:  **A developer doesn't merely write code. A developer builds confidence in the code.** First we **build** the API. Then we **test** the behavior. Then we **measure** our testing. That is the journey:

**Build → Test → Verify → Measure → Improve**

That is how a simple Node.js CRUD application starts becoming an **engineering project**, rather than just a coding exercise.

# Dependency modules used in your Node.js CRUD app for:

* ✅ **API development**
* 🧪 **Unit testing**
* 📊 **Test coverage (optional)**

## ✅ 1. **Dependencies for REST API**

These are runtime dependencies — needed when your app runs:

| Module    | Purpose                                                      |
| --------- | ------------------------------------------------------------ |
| `express` | Web framework to define routes and handle requests/responses |

### Installation:

```bash
npm install express
```

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

## ✅ Summary: `package.json` Scripts Section

```json
"scripts": {
  "start": "node app.js",
  "test": "mocha",
  "coverage": "nyc mocha"
}
```

 

## 📦 Final Module List

```bash
npm install express
npm install --save-dev mocha chai supertest nyc
```
