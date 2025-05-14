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
