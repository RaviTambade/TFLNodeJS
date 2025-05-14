 # Selenium Automation


## ✅ Steps to Create the Node.js Server

### 1. **Project Setup**

Make sure you have **Node.js** installed, then set up a basic project:

```bash
mkdir selenium-node-login
cd selenium-node-login
npm init -y
```

---

### 2. **Install Express**

```bash
npm install express
```

---

### 3. **Server Code**

Create a new file called `server.js` to serve your `login.html`:

#### `server.js`

```js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the login.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

### 4. **Move `login.html` into the Project**

Place the previously provided `login.html` file inside the same directory as `server.js`.

---

### 5. **Run the Server**

Now, start the server using:

```bash
node server.js
```

You should see the message:

```
Server is running on http://localhost:3000
```

---

### 6. **Verify the Server**

Open your browser and navigate to:

```
http://localhost:3000
```

You should see your **login form**.

---

### 7. **Test the Form with Selenium**

Now you can run the **Selenium automation tests** on the login form by using the URL `http://localhost:3000` in your Selenium script.

### Example Test:

#### `test/login.test.js` (Mocha + Selenium)

```js
const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { expect } = require('chai');

describe('Login Form Tests', function () {
  this.timeout(20000); // Set a longer timeout for Selenium tests
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

  it('should login with valid credentials', async () => {
    await driver.get('http://localhost:3000');
    await driver.findElement(By.name('email')).sendKeys('test@example.com');
    await driver.findElement(By.name('password')).sendKeys('password123');
    await driver.findElement(By.id('loginBtn')).click();

    await driver.wait(until.elementLocated(By.id('message')), 5000);
    const message = await driver.findElement(By.id('message')).getText();
    expect(message).to.include('Welcome');
  });

  it('should show error for invalid credentials', async () => {
    await driver.get('http://localhost:3000');
    await driver.findElement(By.name('email')).sendKeys('wrong@example.com');
    await driver.findElement(By.name('password')).sendKeys('wrongpass');
    await driver.findElement(By.id('loginBtn')).click();

    await driver.wait(until.elementLocated(By.id('message')), 5000);
    const message = await driver.findElement(By.id('message')).getText();
    expect(message).to.include('Invalid email or password');
  });
});
```

---

### 8. **Run the Test**

In `package.json`, add a test script:

```json
"scripts": {
  "test": "mocha"
}
```

Then run the test:

```bash
npm test
```

---

### ✅ Result

Selenium will launch the browser, navigate to your locally served login page, and execute the login form tests!

---

This setup should give you a local web server for testing, making it easy to perform end-to-end tests on the **login form** using **Selenium**.

 
