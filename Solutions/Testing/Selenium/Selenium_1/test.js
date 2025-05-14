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
