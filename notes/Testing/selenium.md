Writing a **Node.js app for Selenium automation testing** involves using the **`selenium-webdriver`** package along with Node.js to automate browser actions such as opening a page, clicking buttons, filling forms, etc.

---

## ✅ Step-by-Step Guide to Selenium Automation in Node.js

---

### 📦 1. Install Required Packages

```bash
npm init -y
npm install selenium-webdriver
```

You may also install **chromedriver** (optional but recommended for stability):

```bash
npm install chromedriver
```

---

### 📁 Project Structure

```
selenium-node-app/
├── test.js           # Your selenium automation script
├── package.json
```

---

### ✅ 2. Sample Automation Script (`test.js`)

```js
const { Builder, By, Key, until } = require('selenium-webdriver');

async function runTest() {
  // Launch Chrome browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to Google
    await driver.get('https://www.google.com');

    // Wait for the input box to be located and enter a search term
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Node.js Selenium', Key.RETURN);

    // Wait until results are loaded (optional)
    await driver.wait(until.titleContains('Node.js Selenium'), 5000);

    console.log('Test Passed: Search results loaded.');
  } catch (error) {
    console.error('Test Failed:', error);
  } finally {
    // Close the browser
    await driver.quit();
  }
}

runTest();
```

---

### 🖥️ 3. Run the Script

Make sure Chrome is installed, then run:

```bash
node test.js
```

It will:

* Launch Chrome
* Open Google
* Search for "Node.js Selenium"
* Wait for results
* Close the browser

---

### ⚙️ 4. Run Headless (optional)

If you want to run tests **without opening a visible browser window**, use headless mode:

```js
let chrome = require('selenium-webdriver/chrome');
let options = new chrome.Options().headless();

let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
```

---

### 🧪 5. Combine with Mocha for Test Suites

Install Mocha:

```bash
npm install --save-dev mocha
```

Create test file: `test/search.test.js`

```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { expect } = require('chai');

describe('Google Search Test', function () {
  this.timeout(20000);
  let driver;

  before(async () => {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options())
      .build();
  });

  after(async () => {
    await driver.quit();
  });

  it('should search for Node.js Selenium', async () => {
    await driver.get('https://www.google.com');
    const searchBox = await driver.findElement(By.name('q'));
    await searchBox.sendKeys('Node.js Selenium', Key.RETURN);
    await driver.wait(until.titleContains('Node.js Selenium'), 5000);
    const title = await driver.getTitle();
    expect(title).to.include('Node.js Selenium');
  });
});
```

In `package.json`:

```json
"scripts": {
  "test": "mocha"
}
```

Run the test:

```bash
npm test
```

---

## ✅ Summary of Key Tools

| Tool                 | Purpose                       |
| -------------------- | ----------------------------- |
| `selenium-webdriver` | Automate browser interactions |
| `chromedriver`       | Connects Selenium to Chrome   |
| `mocha`              | JavaScript test framework     |
| `chai` (optional)    | Assertions in tests           |

---
 Certainly! Below are some **important Selenium automation test cases** for a **login form**, written from a **Node.js + Selenium** perspective.

We'll assume the login form has the following fields:

* Email input → `<input name="email">`
* Password input → `<input name="password">`
* Submit button → `<button id="loginBtn">`
* Message area → `<div id="message">` (for success/error)

---

## ✅ Common Selenium Test Cases for Login Form

### 1. **Successful Login with Valid Credentials**

```js
it('should login with valid credentials', async () => {
  await driver.get('http://localhost:3000/login');
  await driver.findElement(By.name('email')).sendKeys('test@example.com');
  await driver.findElement(By.name('password')).sendKeys('password123');
  await driver.findElement(By.id('loginBtn')).click();

  await driver.wait(until.elementLocated(By.id('message')), 5000);
  const message = await driver.findElement(By.id('message')).getText();
  expect(message).to.include('Welcome');
});
```

---

### 2. **Login Attempt with Invalid Credentials**

```js
it('should show error for invalid credentials', async () => {
  await driver.get('http://localhost:3000/login');
  await driver.findElement(By.name('email')).sendKeys('wrong@example.com');
  await driver.findElement(By.name('password')).sendKeys('wrongpass');
  await driver.findElement(By.id('loginBtn')).click();

  await driver.wait(until.elementLocated(By.id('message')), 5000);
  const message = await driver.findElement(By.id('message')).getText();
  expect(message).to.include('Invalid email or password');
});
```

---

### 3. **Empty Fields Validation**

```js
it('should show validation message if fields are empty', async () => {
  await driver.get('http://localhost:3000/login');
  await driver.findElement(By.id('loginBtn')).click();

  const emailError = await driver.findElement(By.id('emailError')).getText();
  const passwordError = await driver.findElement(By.id('passwordError')).getText();

  expect(emailError).to.include('Email is required');
  expect(passwordError).to.include('Password is required');
});
```

---

### 4. **Invalid Email Format**

```js
it('should show error for invalid email format', async () => {
  await driver.get('http://localhost:3000/login');
  await driver.findElement(By.name('email')).sendKeys('invalid-email');
  await driver.findElement(By.name('password')).sendKeys('password123');
  await driver.findElement(By.id('loginBtn')).click();

  const emailError = await driver.findElement(By.id('emailError')).getText();
  expect(emailError).to.include('Invalid email format');
});
```

---

### 5. **Password Field Masking**

```js
it('should mask the password input', async () => {
  await driver.get('http://localhost:3000/login');
  const type = await driver.findElement(By.name('password')).getAttribute('type');
  expect(type).to.equal('password');
});
```

---

## 🧪 Extra Useful Checks (Optional)

* **Remember Me checkbox**
* **Forgot Password link**
* **Login with Enter key (`Key.RETURN`)**
* **Redirection to dashboard/home page**
* **Session/cookie validation after login**

---

## ✅ Test Summary Table

| Test Case                       | Purpose                           |
| ------------------------------- | --------------------------------- |
| Valid Login                     | Confirms correct login process    |
| Invalid Credentials             | Validates error handling          |
| Empty Input Fields              | Checks required field validation  |
| Invalid Email Format            | Tests email pattern validation    |
| Password Masking                | Ensures password is hidden        |
| Login Button Click or Enter Key | Confirms form submission behavior |

---

Would you like me to package these into a full working **Mocha + Selenium test suite** for local HTML or a live demo app?
