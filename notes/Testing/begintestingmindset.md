# 🌸 Mocha and Chai

“Students, today I don't want to teach you **Mocha and Chai as two npm packages**.

I want you to understand them as **two characters in a software testing story**.”


## 🌱 The Story Begins...

Imagine we are building an **Insurance Management System** for an insurance company. Our application has a simple responsibility: “Given the policy amount and premium rate, calculate the premium.”

So we write:

```js
function calculatePremium(policyAmount, rate) {
    return policyAmount * rate;
}

module.exports = { calculatePremium };
```

Now I ask the learners: **“How do you know this function is working correctly?”**  Someone says:  “Sir, run the application and check the output.” I smile. “That's how we test manually. But imagine tomorrow we have **500 functions**. Will you manually test all 500 every time somebody changes the code?” The classroom becomes quiet.

Then I say: **“This is where automated testing enters our story.”**

 

# 👨‍🏫 Enter Mocha — The Test Manager

Imagine a company called **Transflower Insurance Testing Department**. There is a manager named **Mocha**. Mocha's job is not to decide whether the calculation is correct. His job is simply:

> **“Tell me what tests we have, and I will execute them.”**

So we write:

```js
describe('Policy Premium Calculation', () => {

    it('should calculate premium correctly', () => {
        // test goes here
    });

});
```

Mocha sees this and says:

> “Okay! I found a test called
> **should calculate premium correctly**.”

And Mocha runs it. So remember:

```text
Mocha
   │
   ├── Finds tests
   ├── Organizes tests
   ├── Executes tests
   └── Reports PASS / FAIL
```

But there is one problem. Mocha runs the test. **Who decides whether the result is correct?**

 

# 🍵 Enter Chai — The Inspector

Now another character enters our story. His name is **Chai**. Chai is the **quality inspector**. Mocha asks:  “Chai, I executed the function. It returned 2000. Is that correct?” Chai says:  “What was the expected value?” We say:  “2000.” Chai checks:

```js
expect(premium).to.equal(2000);
```

If the value is 2000:

```text
Actual   = 2000
Expected = 2000

       ✅ PASS
```

But suppose our program returns 2500:

```text
Actual   = 2500
Expected = 2000

       ❌ FAIL
```

So now the students should understand the relationship:

```text
             TESTING TEAM

          ┌───────────────┐
          │     Mocha     │
          │ Test Runner   │
          └───────┬───────┘
                  │
             "Run this"
                  │
                  ▼
          Application Code
                  │
                  ▼
               Result
                  │
                  ▼
          ┌───────────────┐
          │     Chai      │
          │  Inspector    │
          └───────┬───────┘
                  │
             "Is it correct?"
                  │
             ┌────┴────┐
             ▼         ▼
           PASS       FAIL
```

 

# 🧪 Now Let's Write the Test

Our complete test becomes:

```js
const { expect } = require('chai');
const { calculatePremium } = require('../policy');

describe('Policy Premium Calculation', () => {

    it('should calculate premium correctly', () => {

        // Arrange
        const policyAmount = 100000;
        const rate = 0.02;

        // Act
        const premium = calculatePremium(
            policyAmount,
            rate
        );

        // Assert
        expect(premium).to.equal(2000);
    });

});
```

Now I stop and ask the learners: **“What are these three words?”**

```text
Arrange
Act
Assert
```

 

# 🎯 Arrange – Act – Assert

I tell the students:

### 1. Arrange

Prepare the situation.

```js
const policyAmount = 100000;
const rate = 0.02;
```

We are saying:

> “Let's prepare our insurance policy scenario.”

 

### 2. Act

Call the functionality we want to test.

```js
const premium = calculatePremium(
    policyAmount,
    rate
);
```

We are saying:

> “Now let's see what the application does.”

 

### 3. Assert

Ask Chai to verify the result.

```js
expect(premium).to.equal(2000);
```

We are saying:

> “Chai, please inspect the result.”

 

# 🧠 The Mentor's Important Question

Then I ask: **“Students, is Chai testing our application?”** Usually somebody says: “Yes, sir.” I say: **“Not exactly.”**

- Chai doesn't decide **when** to run the test.
- Chai doesn't organize the test suite.
- Chai doesn't execute all the tests.
- Chai primarily gives us **assertions**.

That's why:

```text
Mocha → Executes

Chai  → Verifies
```

Or in our story:

```text
Mocha = Test Manager
Chai  = Quality Inspector
```

# 🍵 Three Ways Chai Can Talk

I then tell the learners: “Chai is quite a flexible inspector. It can speak three different languages.”

### Expect style

```js
expect(premium).to.equal(2000);
```

### Should style

```js
premium.should.equal(2000);
```

### Assert style

```js
assert.equal(premium, 2000);
```

For beginners, I generally recommend:

```js
expect(...)
```

because it reads naturally: **Expect premium to equal 2000.**
 

# 🏢 Now Think Like a Developer

Suppose our insurance application has:

```text
Policy
   │
   ├── calculatePremium()
   ├── validatePolicy()
   ├── purchasePolicy()
   ├── renewPolicy()
   └── cancelPolicy()
```

A developer should not merely write these functions. A professional developer asks: **“How will I prove that each function behaves correctly?”** So we create tests:

```text
Policy Service
      │
      ├── calculatePremium()
      │       ├── valid amount
      │       ├── zero amount
      │       ├── negative amount
      │       └── different rates
      │
      ├── validatePolicy()
      │       ├── valid policy
      │       └── invalid policy
      │
      └── purchasePolicy()
              ├── successful purchase
              └── rejected purchase
```

Now testing is no longer: “Sir, I wrote some tests.” It becomes: **“Sir, I have converted the business behavior into executable specifications.”** That is a much more mature developer mindset.

 

# 🌸 Transflower Mentor's Final Message

I tell my learners: **“Don't learn Mocha and Chai merely because somebody asked you to learn testing.”** Learn them because a professional developer should be able to say: **“I wrote the code, and I can prove that it works.”** And remember our two characters:

```text
        🌸 SOFTWARE TESTING STORY

              Mocha
                │
        "I will run the test."
                │
                ▼
          Application
                │
                ▼
             Result
                │
                ▼
              Chai
                │
       "I will verify it."
                │
          ┌─────┴─────┐
          ▼           ▼
        PASS         FAIL
```

**Mocha runs.
Chai checks.
The developer learns.
The software becomes trustworthy.**

That is the beginning of the **testing mindset**.
