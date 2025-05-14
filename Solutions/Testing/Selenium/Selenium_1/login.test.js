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
