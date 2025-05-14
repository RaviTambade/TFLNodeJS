# Software Testing 

### ✅ **6-Hour Software Testing Session Plan**

#### 🎯 **Session Objective**:

Equip participants with the knowledge of software testing fundamentals, testing types, tools, and hands-on exposure to writing and executing test cases.

---

### 🕐 **Session Breakdown**

#### 🧩 **1. Introduction to Software Testing (45 mins)**

* **What is Software Testing?**
* Importance of testing in SDLC
* Difference between Manual vs Automation Testing
* Error, defect, failure concepts
* QA vs QC vs Testing
* Real-world analogy: Quality check in manufacturing

**Activity**: Quick quiz or live poll — “What do you think testing is?”

---

#### 🔍 **2. Testing Types & Techniques (60 mins)**

* Static vs Dynamic Testing
* Black-box, White-box, Gray-box testing
* Functional vs Non-functional testing
* Unit, Integration, System, Acceptance Testing
* Regression, Smoke, Sanity Testing

**Activity**: Group activity — classify test cases into testing types.

---

#### 🛠️ **3. Test Case Writing & Bug Reporting (60 mins)**

* Test Plan, Test Case, Test Scenario — differences
* Writing effective test cases (Example: login form)
* Test data design
* Defect lifecycle and bug report writing
* Severity vs Priority

**Hands-on**: Write test cases for a sample web page or app.

**Break**: ☕️ **(15 mins)**

---

#### 🤖 **4. Introduction to Automation Testing (45 mins)**

* Need for automation
* Automation tools overview: Selenium, Postman, JUnit/NUnit/TestNG, Cypress
* When to automate?
* Demo: Selenium script to automate login

**Live Demo**: Automate login page form submission using Selenium + Java/Python.

---

#### 🔬 **5. Hands-on Activity / Mini Project (60 mins)**

* Create a small web page (or use a sample one)
* Ask students to write test cases
* Perform manual testing
* Optionally, automate 1-2 test cases with Selenium

**Alternate Option**: API Testing with Postman — GET/POST on a public API

---

#### 📊 **6. Industry Practices, CI/CD, and Career Path (30 mins)**

* How testing fits into DevOps & CI/CD
* Integration with Jenkins, GitHub Actions
* Agile Testing, TDD, BDD basics
* Career paths: Manual Tester, Automation Tester, SDET

**Activity**: Q\&A + experience sharing + roadmap discussion

---

### 📝 **End of Session**

* Summary & Recap
* Share resources (books, tools, platforms)
* Feedback from participants
* Optional: Small quiz or Kahoot game to revise concepts

---

### 🧰 **Tools You Can Use**

* **Presentation**: PowerPoint / Google Slides
* **Demo**: VS Code, Selenium IDE/WebDriver, Postman
* **Collaboration**: Google Docs (for test case writing), Kahoot, Mentimeter
* **Sample app**: Use [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/) or [https://www.saucedemo.com/](https://www.saucedemo.com/)

---

### 💡 Bonus Tips

* Mix up lectures with demos and engagement.
* Keep energy high with real-world analogies and stories.
* Leave time for interaction and hands-on.

Here's a detailed breakdown for **Section 1: Introduction to Software Testing (45 minutes)**. This part sets the foundation and should be **interactive, relatable, and rich with examples**.

---

## ✅ **1. Introduction to Software Testing (45 mins)**

### 🎯 **Learning Objectives**

By the end of this section, participants will:

* Understand the purpose and scope of software testing
* Know key testing-related terms
* Appreciate the importance of testing in software quality and reliability

---

### ⏱️ Time-Wise Breakdown

| Time       | Topic                                          |
| ---------- | ---------------------------------------------- |
| 0-5 mins   | Icebreaker + Real-world analogy                |
| 5-15 mins  | What is Software Testing? Why is it needed?    |
| 15-25 mins | Key Concepts and Terminology                   |
| 25-35 mins | Manual vs Automation Testing                   |
| 35-45 mins | QA vs QC vs Testing + Interactive Quiz or Poll |

---

### 🗣️ **Delivery Flow**

#### 🔹 0-5 mins – Icebreaker & Analogy

* Ask: *“Have you ever used an app that crashed or gave the wrong output?”*
* Real-world analogy: Quality check in a car manufacturing line — how a flaw in a small part can ruin the entire product.

**Slide/Board**:

```
“Testing ensures that we deliver what we promised, and it works as expected.”
```

---

#### 🔹 5-15 mins – What is Software Testing?

* **Definition**: Process of evaluating a software application to detect differences between given and expected outputs.
* **Purpose**:

  * Detect bugs
  * Ensure quality
  * Validate business requirements
* **SDLC Integration**: Brief mention of Waterfall vs Agile testing roles.

**Show Diagram**: V-model or SDLC with testing phases

---

#### 🔹 15-25 mins – Key Concepts & Terminology

Explain these with simple examples:

* **Bug/Defect/Error/Failure**

  * Error: Human mistake (e.g., wrong formula)
  * Bug: Flaw in code
  * Failure: App crashes or misbehaves
* **Verification vs Validation**
* **Test Case, Test Scenario**
* **Test Data**

Use a login page or calculator example to explain.

---

#### 🔹 25-35 mins – Manual vs Automation Testing

| Aspect       | Manual Testing | Automation Testing                    |
| ------------ | -------------- | ------------------------------------- |
| Cost         | Low initially  | High initially                        |
| Time         | Slower         | Faster                                |
| Human effort | Required       | Reduced                               |
| Tools        | Not mandatory  | Requires tools like Selenium, Cypress |

**When to use which**:

* Manual: UI/UX testing, ad-hoc testing
* Automation: Regression, load testing

---

#### 🔹 35-45 mins – QA vs QC vs Testing

| Term           | Meaning           | Focus                |
| -------------- | ----------------- | -------------------- |
| QA (Assurance) | Process-oriented  | Prevent defects      |
| QC (Control)   | Product-oriented  | Find defects         |
| Testing        | Activity under QC | Validate correctness |

**Quick Recap Poll**:

* Use Kahoot/Slido/Mentimeter or quick hand raise:

  * “Which of these is product-focused: QA / QC / Testing?”
  * “Is Automation cheaper than manual in the long run?”

---

### 📌 **Handouts / Resources**

* Glossary of common testing terms
* Sample SDLC & Testing Lifecycle diagram
* Short PDF on testing types (preview for next session)

---

Here's a detailed plan for your second session block:

---

## ✅ **2. Testing Types & Techniques (60 mins)**

### 🎯 **Learning Objectives**

By the end of this section, participants will:

* Understand the major types and levels of software testing
* Differentiate between functional and non-functional testing
* Learn black-box, white-box, and gray-box testing techniques
* Be able to classify testing types based on scenarios

---

### ⏱️ **Time-Wise Breakdown**

| Time       | Topic                                               |
| ---------- | --------------------------------------------------- |
| 0–10 mins  | Classification of Testing Types                     |
| 10–25 mins | Levels of Testing                                   |
| 25–40 mins | Functional vs Non-Functional Testing                |
| 40–50 mins | Testing Techniques (Black-box, White-box, Gray-box) |
| 50–60 mins | Group Activity: Classify Testing Types              |

---

### 🗣️ **Delivery Flow**

---

### 🔹 0–10 mins – Classification of Testing Types

Introduce broad categories:

* **Manual vs Automation Testing**
* **Static vs Dynamic Testing**

**Explain with simple examples**:

* Static: Reviewing code, documentation
* Dynamic: Executing the application to find bugs

Use a table to show classification.

---

### 🔹 10–25 mins – Levels of Testing

**Explain 4 key levels of testing** (with diagram):

| Level               | Description            | Example             |
| ------------------- | ---------------------- | ------------------- |
| Unit Testing        | Individual components  | Test a function     |
| Integration Testing | Combine modules        | Login + dashboard   |
| System Testing      | Full system validation | End-to-end scenario |
| Acceptance Testing  | Client validation      | UAT phase           |

**Show Diagram**: Testing pyramid

**Tools Mention**:

* Unit: JUnit, NUnit
* Integration: Postman, REST-assured
* System: Selenium
* Acceptance: Manual, Gherkin (for BDD)

---

### 🔹 25–40 mins – Functional vs Non-Functional Testing

| Type     | Functional Testing  | Non-Functional Testing |
| -------- | ------------------- | ---------------------- |
| Focus    | Business logic      | Performance, usability |
| Examples | Login, Registration | Load, Stress, Security |
| Tools    | Selenium, Postman   | JMeter, OWASP ZAP      |

**Key Non-Functional Types**:

* Performance Testing
* Load Testing
* Security Testing
* Usability Testing
* Compatibility Testing

**Live Demo Idea**: Open a heavy webpage in browser dev tools and show loading time (performance).

---

### 🔹 40–50 mins – Testing Techniques

#### ✔️ **Black-box Testing**:

* Test without knowledge of internal code
* Based on input/output
* Examples: Functional UI testing, REST API testing

#### ✔️ **White-box Testing**:

* Internal logic is visible
* Requires programming knowledge
* Examples: Unit tests, code coverage

#### ✔️ **Gray-box Testing**:

* Partial knowledge of internals
* Example: Integration testing by testers with access to DB/schema

**Visual Aid**: Venn diagram comparing black, white, and gray-box testing

---

### 🔹 50–60 mins – Activity: Classify Testing Scenarios

**Activity**:
Show these 6 scenarios on screen/handout and ask the audience to classify:

1. Testing app speed under 1000 users
2. Writing test cases for login logic
3. Checking whether all UI buttons work
4. Reviewing code for test coverage
5. Performing UAT before product release
6. Verifying website layout on different devices

**Discussion**: Which are functional/non-functional, black/white-box, or levels?

---

### 📎 **Handouts / Materials**

* Classification table PDF
* Testing pyramid diagram
* Sample MCQ quiz or recap sheet

---

Would you like this content exported to:

* ✅ A PowerPoint deck?
* ✅ A printable participant workbook?
* ✅ An interactive quiz (Kahoot/Slido) setup?



Here’s a complete guide for conducting the **3rd session block** of your 6-hour Software Testing workshop:

---

## ✅ **3. Test Case Writing & Bug Reporting (60 mins)**

### 🎯 **Learning Objectives**

By the end of this session, learners will be able to:

* Write clear, effective test cases with proper structure
* Understand the defect lifecycle
* Report bugs with appropriate details
* Differentiate between severity and priority

---

### ⏱️ **Time-Wise Breakdown**

| Time       | Topic                                           |
| ---------- | ----------------------------------------------- |
| 0–10 mins  | Test Case vs Test Scenario vs Test Plan         |
| 10–30 mins | Structure of a Good Test Case + Hands-on        |
| 30–40 mins | Defect Lifecycle Overview                       |
| 40–50 mins | Bug Reporting Essentials                        |
| 50–60 mins | Severity vs Priority + Live Bug Report Practice |

---

### 🗣️ **Delivery Flow**

---

### 🔹 0–10 mins – Terminology Clarification

| Term          | Meaning             | Example                              |
| ------------- | ------------------- | ------------------------------------ |
| Test Plan     | High-level strategy | “We’ll test login, signup, cart”     |
| Test Scenario | What to test        | “Test login with valid/invalid data” |
| Test Case     | How to test         | Steps + input + expected result      |

**Analogy**:

* Test Plan = Map
* Scenario = Route
* Test Case = Step-by-step directions

---

### 🔹 10–30 mins – Structure of a Test Case + Hands-on

#### ✅ Basic Structure of a Test Case:

| Field           | Description              |
| --------------- | ------------------------ |
| TC\_ID          | Unique test case ID      |
| Title           | Brief description        |
| Preconditions   | What must be true before |
| Steps           | Actions to perform       |
| Expected Result | What should happen       |
| Actual Result   | (During execution)       |
| Status          | Pass/Fail                |
| Remarks         | Optional notes           |

#### 🧪 Example: Test Login Functionality

```text
TC_ID: TC_001
Title: Login with valid credentials
Preconditions: User is on login page
Steps:
  1. Enter username: "user123"
  2. Enter password: "pass123"
  3. Click Login
Expected Result: User is redirected to dashboard
```

**Hands-on**: Ask participants to write 2 test cases for:

* A login page
* A registration page (name, email, password, confirm password)

Use Google Docs or shared whiteboard for collaboration.

---

### 🔹 30–40 mins – Defect Lifecycle

Show a **Defect Life Cycle Diagram**:

```text
New → Assigned → Open → Fixed → Retest → Verified → Closed
                        ↑
                   Reopen ← Rejected / Deferred / Duplicate
```

Explain:

* **Roles involved** (Tester, Dev, Test Lead)
* **Bug statuses**
* **Reopen scenario example**

---

### 🔹 40–50 mins – Bug Reporting Essentials

#### 🐞 Components of a Good Bug Report:

| Field                     | Example                        |
| ------------------------- | ------------------------------ |
| Summary                   | "Login page crashes on submit" |
| Steps to Reproduce        | Step-by-step actions           |
| Expected vs Actual Result | Clear contrast                 |
| Severity                  | Blocker, Critical, Minor       |
| Priority                  | High, Medium, Low              |
| Screenshot/Logs           | Supporting evidence            |

**Tips**:

* Be clear and concise
* Provide enough detail to reproduce
* Avoid vague language like “not working”

---

### 🔹 50–60 mins – Severity vs Priority + Bug Report Practice

#### 📊 Table:

| Example                    | Severity | Priority |
| -------------------------- | -------- | -------- |
| App crashes on login       | High     | High     |
| Typo in footer text        | Low      | Low      |
| Incorrect balance shown    | High     | Medium   |
| Privacy policy link broken | Low      | High     |

**Activity**: Show 4–5 bug scenarios and ask participants to classify **severity** and **priority**.

---

### 📝 Optional Exercises or Handouts

* Blank Test Case Template (Excel or PDF)
* Sample Bug Report (based on login form)
* Short quiz on lifecycle and terminology

---

### ✅ Tools You Can Demonstrate (Optional)

* Excel or Google Sheets for test cases
* Jira or Trello for bug tracking (screenshots or live demo)
* Bugzilla or GitHub Issues (if accessible)

---

Would you like me to:

* 🎨 Design a slide deck for this session?
* 🧾 Provide downloadable templates for test cases and bug reports?
* 🛠️ Create a simple web page to use for the hands-on testing activity?


Here’s a well-structured plan for **Session 4: Introduction to Automation Testing (45 mins)** in your 6-hour Software Testing workshop.

---

## ✅ **4. Introduction to Automation Testing (45 mins)**

### 🎯 **Learning Objectives**

By the end of this session, participants will:

* Understand the **importance and benefits** of automation testing
* Know where automation fits in the SDLC
* Learn the basics of **Selenium** or a selected tool
* See a **live demo** of a simple automation script (Login page)

---

### ⏱️ **Time-Wise Breakdown**

| Time       | Topic                                      |
| ---------- | ------------------------------------------ |
| 0–10 mins  | Why Automation Testing?                    |
| 10–20 mins | Manual vs Automation Comparison            |
| 20–35 mins | Automation Tools Overview + Selenium Intro |
| 35–45 mins | Live Demo: Automating a Simple Login Form  |

---

### 🗣️ **Delivery Flow**

---

### 🔹 0–10 mins – Why Automation Testing?

#### Key Points:

* Manual testing is time-consuming for repetitive tasks
* Automation provides faster feedback
* Ideal for **regression, load, smoke, and repetitive UI testing**

📌 **When to Automate**:
✅ Repetitive test cases
✅ High-risk business critical test cases
❌ Exploratory or one-time test cases

#### Real-World Analogy:

Testing 100 login attempts manually vs running a script in seconds.

---

### 🔹 10–20 mins – Manual vs Automation Comparison

| Feature     | Manual Testing          | Automation Testing           |
| ----------- | ----------------------- | ---------------------------- |
| Speed       | Slow                    | Fast                         |
| Accuracy    | Human errors possible   | Highly accurate              |
| Reusability | No                      | Yes                          |
| Cost        | Low at first            | High setup, low long-term    |
| Ideal For   | UI/UX, Ad-hoc, One-time | Regression, Load, Repetitive |

🔸 **Tool Setup Costs** vs **Time Saved** in long-term projects.

---

### 🔹 20–35 mins – Automation Tools Overview + Selenium Basics

#### Popular Automation Tools (Mention Only):

| Tool               | Purpose                       |
| ------------------ | ----------------------------- |
| Selenium           | Web UI testing                |
| Postman + Newman   | API testing                   |
| JUnit/TestNG/NUnit | Unit test frameworks          |
| Cypress            | Modern JavaScript test runner |
| Appium             | Mobile automation             |

### 🧰 **Focus on Selenium** (Web UI Automation)

* Open-source, browser-based automation
* Works with Java, Python, C#
* Cross-browser support

#### Selenium Architecture (Simple Visual):

1. Test Script (Java/Python)
2. Selenium WebDriver
3. Browser (Chrome, Firefox)

---

### 🔹 35–45 mins – Live Demo: Automating Login Form with Selenium (Java or Python)

#### 📍Steps to Show:

1. Launch browser
2. Open login page
3. Enter username and password
4. Click Login
5. Validate URL or page title

#### 💡 Sample Code Snippet (Java + Selenium):

```java
WebDriver driver = new ChromeDriver();
driver.get("https://example.com/login");

driver.findElement(By.id("username")).sendKeys("testuser");
driver.findElement(By.id("password")).sendKeys("pass123");
driver.findElement(By.id("loginBtn")).click();

String expectedUrl = "https://example.com/dashboard";
Assert.assertEquals(driver.getCurrentUrl(), expectedUrl);
```

✅ Optionally demonstrate in Python too if participants are non-Java users.

#### Tools Required:

* Java + Selenium WebDriver + ChromeDriver OR
* Python + Selenium + ChromeDriver

---

### 🧠 Key Takeaways

* Use **manual testing** for UI/UX & exploratory work
* Use **automation** to save time on regression and routine tests
* **Selenium** is the most widely adopted tool for browser-based automation

---

### 📂 Resources to Share

* Selenium installation guide
* Sample login automation script
* Free public sites to practice:

  * [https://www.saucedemo.com/](https://www.saucedemo.com/)
  * [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)
  * [https://demoqa.com/](https://demoqa.com/)

---

### ✨ Optional Add-ons:

Would you like me to:

* ✅ Generate a PowerPoint for this session?
* ✅ Provide install-ready **Selenium + Java/Python** starter project?
* ✅ Create a **worksheet with fill-in-the-blanks** Selenium code for students to complete?


Here’s a complete plan for **Session 5: Hands-on Activity / Mini Project (60 mins)** — the most **interactive and engaging part** of your 6-hour Software Testing workshop.

---

## ✅ **5. Hands-on Activity / Mini Project (60 mins)**

### 🎯 **Objective**

Reinforce all previously learned testing concepts by applying them on a **real or simulated web application** using both **manual** and optionally **automated** testing approaches.

---

### 🕐 **Time-Wise Breakdown**

| Time       | Activity                                       |
| ---------- | ---------------------------------------------- |
| 0–10 mins  | Explain the problem statement & app under test |
| 10–25 mins | Manual Testing: Write test cases               |
| 25–40 mins | Execute test cases & log defects               |
| 40–55 mins | (Optional) Automate 1–2 simple test cases      |
| 55–60 mins | Group review & wrap-up discussion              |

---

### 🧪 **Suggested Application for Testing**

Choose a simple, stable web app with login and form functionality.

#### 👉 Recommended Demo Sites:

* [https://www.saucedemo.com/](https://www.saucedemo.com/) — eCommerce app
* [https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/) — HRM app
* Your own custom login/registration page

---

### 🧩 **Step-by-Step Plan**

---

### 🔹 0–10 mins – Project Setup & Problem Statement

* Give a brief demo of the selected web app.
* Explain 1–2 core modules users will test (e.g., Login, Add to Cart, Leave Request).

**Sample Scenario**:

> "You’re testing the Login module of an HR application. You must write test cases, execute them, and report any bugs you find."

---

### 🔹 10–25 mins – Manual Testing: Test Case Design

**Task for Participants**:

* Write 4–6 test cases for the selected module.
* Use the structure learned earlier:

  * TC\_ID, Title, Steps, Expected Result

**Example**:

```text
TC_ID: TC_003
Title: Login with invalid credentials
Steps:
  1. Enter "user" in username
  2. Enter "wrongpass" in password
  3. Click Login
Expected: "Invalid credentials" message appears
```

**Tools**:

* Google Sheet, Excel, Notepad, or TestLink (if available)

---

### 🔹 25–40 mins – Execute Test Cases & Log Bugs

* Ask them to run their test cases manually.
* For failed test cases, write **bug reports** using structured format:

  * Title, Steps, Expected vs Actual, Severity, Priority

**Example Bug**:

```text
Title: No error message on invalid login
Steps:
1. Enter wrong credentials
2. Click login
Expected: "Invalid credentials" message appears
Actual: Page refreshes, no message shown
Severity: Medium
Priority: High
```

**Bug Reporting Tool Options**:

* Google Form
* GitHub Issues
* Excel
* Free Jira sandbox (optional)

---

### 🔹 40–55 mins – Optional: Automation Mini-Demo or Practice

If participants have setup ready:

* Automate **one login test case** using Selenium or Postman (API testing)
* OR, show a pre-built automation script and explain line-by-line

**Alternate Task for Manual-Only Audience**:

* Ask them to peer-review someone else’s test cases
* Do a mini bug triage: Assign severity/priority

---

### 🔹 55–60 mins – Review & Wrap-up

* Invite 2–3 volunteers to present:

  * Their test cases
  * Any bugs they found
  * Observations

* Wrap up with key learning:

  * How structured testing helps
  * Importance of clarity in test cases and bug reports

---

### 📎 Optional Handouts / Templates

* Test Case Template (Excel/Google Sheets)
* Bug Report Template
* Automation Starter Script (Java or Python)
* Checklist: Common Functional Test Cases

---

Would you like me to:

* 🧾 Generate a complete **student handout pack** (templates + scenario)?
* 🧪 Prepare a **ready-to-test HTML/JS demo app**?
* 📊 Design a group evaluation or scoring system?


Here’s a **step-by-step guide** to setting up **Selenium automation testing using Java** — perfect for beginners or for hands-on training in your software testing workshop.

---

## ✅ **Selenium Automation Setup Using Java (Step-by-Step)**

---

### 🧰 **Requirements**

| Tool                  | Description                                |
| --------------------- | ------------------------------------------ |
| Java JDK              | Java Development Kit (JDK 8 or above)      |
| Eclipse or IntelliJ   | Java IDE (Eclipse is easier for beginners) |
| Selenium Java Library | Selenium WebDriver library                 |
| ChromeDriver          | Browser automation driver                  |
| Maven (optional)      | For dependency management                  |

---

### 🔧 **Step 1: Install Java JDK**

1. Download from: [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html)
2. Install and set environment variable:

   * `JAVA_HOME = C:\Program Files\Java\jdk-XX`
   * Add `%JAVA_HOME%\bin` to the system `PATH`

🔍 **Check with**:

```bash
java -version
```

---

### 💻 **Step 2: Install Eclipse IDE**

1. Download from: [https://www.eclipse.org/downloads/](https://www.eclipse.org/downloads/)
2. Install “Eclipse IDE for Java Developers”
3. Launch and create a new **Java Project**

---

### 📦 **Step 3: Add Selenium Java Library**

#### Option 1: Manual (Beginner-friendly)

1. Download Selenium Java Client:
   [https://www.selenium.dev/downloads/](https://www.selenium.dev/downloads/)
2. Extract the ZIP file
3. In Eclipse:

   * Right-click your project > **Build Path** > **Configure Build Path**
   * Add external JARs:

     * Add all JARs from the main `selenium-java-X.X.X` folder and the `libs` folder

#### Option 2: Maven (Recommended for scalability)

1. Add `pom.xml` file to your project
2. Add this dependency:

```xml
<dependencies>
  <dependency>
    <groupId>org.seleniumhq.selenium</groupId>
    <artifactId>selenium-java</artifactId>
    <version>4.20.0</version> <!-- Use latest version -->
  </dependency>
</dependencies>
```

---

### 🌐 **Step 4: Download ChromeDriver**

1. Go to: [https://sites.google.com/chromium.org/driver/](https://sites.google.com/chromium.org/driver/)
2. Download the version matching your Chrome browser
3. Place it in a known folder (e.g., `C:\SeleniumDrivers`)
4. Add the folder to your system `PATH`

---

### 🧪 **Step 5: Write and Run Your First Selenium Test**

#### Sample Code:

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LoginTest {
    public static void main(String[] args) {
        // Set ChromeDriver path if not added to PATH
        // System.setProperty("webdriver.chrome.driver", "C:\\SeleniumDrivers\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();
        driver.get("https://www.saucedemo.com/");

        System.out.println("Title is: " + driver.getTitle());

        // Close browser
        driver.quit();
    }
}
```

---

### 🚀 **Run the Test**

1. Right-click on the Java file > **Run As > Java Application**
2. Browser should launch and open the website

---

### 🔄 **Optional Enhancements**

* Use `WebDriverManager` to avoid manual driver downloads:

```xml
<dependency>
  <groupId>io.github.bonigarcia</groupId>
  <artifactId>webdrivermanager</artifactId>
  <version>5.8.0</version>
</dependency>
```

```java
WebDriverManager.chromedriver().setup();
```

* Add assertions using **JUnit/TestNG**
* Modularize test code using Page Object Model (POM)

---

### 📎 Summary Checklist

* [x] Java installed and configured
* [x] Eclipse/IDE setup
* [x] Selenium JARs or Maven dependency added
* [x] ChromeDriver downloaded and added to PATH
* [x] First test script created and executed

---

Would you like me to:

* 📂 Create a downloadable starter project (ZIP)?
* 📽️ Provide screenshots or video clips for each step?
* 📊 Add a checklist or lab sheet for students?

 Here’s a list of the most **important and frequently used Selenium WebDriver functions** in **Java**, categorized by functionality. These are perfect for teaching beginners how to automate browser actions.

---

## ✅ **Important Selenium Automation Testing Functions (Java)**

---

### 🧭 **1. Browser Setup & Navigation**

```java
WebDriver driver = new ChromeDriver();
driver.get("https://example.com");        // Opens a URL
driver.manage().window().maximize();      // Maximizes browser window
driver.navigate().to("https://example.com"); // Navigate to URL
driver.navigate().back();                // Go back
driver.navigate().forward();             // Go forward
driver.navigate().refresh();             // Refresh page
```

---

### 🔍 **2. Locating Web Elements**

```java
driver.findElement(By.id("username"));       // Locate by ID
driver.findElement(By.name("email"));        // Locate by Name
driver.findElement(By.className("btn"));     // Locate by Class Name
driver.findElement(By.tagName("input"));     // Locate by Tag Name
driver.findElement(By.linkText("Login"));    // Locate by Link Text
driver.findElement(By.partialLinkText("Log")); // Partial match
driver.findElement(By.xpath("//input[@type='text']")); // XPath
driver.findElement(By.cssSelector(".login-btn"));      // CSS Selector
```

---

### ✍️ **3. Interacting with Web Elements**

```java
WebElement element = driver.findElement(By.id("username"));
element.sendKeys("testuser");               // Enter text
element.clear();                            // Clear text field
element.click();                            // Click a button or link
```

---

### ✅ **4. Checkboxes, Radio Buttons, Dropdowns**

```java
// Checkbox or radio button
WebElement checkbox = driver.findElement(By.id("agree"));
checkbox.click();

// Dropdown (using Select class)
Select dropdown = new Select(driver.findElement(By.id("country")));
dropdown.selectByVisibleText("India");
dropdown.selectByIndex(2);
dropdown.selectByValue("IN");
```

---

### 📄 **5. Page Information**

```java
String title = driver.getTitle();              // Get page title
String currentUrl = driver.getCurrentUrl();    // Get current URL
String pageSource = driver.getPageSource();    // Get full HTML source
```

---

### 🔐 **6. Alerts and Pop-ups**

```java
Alert alert = driver.switchTo().alert();
alert.accept();         // Click OK
alert.dismiss();        // Click Cancel
alert.getText();        // Read alert message
alert.sendKeys("Text"); // Enter text in prompt
```

---

### 📑 **7. Frames and Windows**

```java
// Switch to frame
driver.switchTo().frame("frameName");

// Switch back to main content
driver.switchTo().defaultContent();

// Handle multiple windows
Set<String> handles = driver.getWindowHandles();
for(String handle : handles) {
    driver.switchTo().window(handle);
}
```

---

### 🕒 **8. Waits (Synchronization)**

```java
// Implicit Wait (applies globally)
driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

// Explicit Wait
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("submitBtn")));
```

---

### 📷 **9. Screenshots**

```java
TakesScreenshot ts = (TakesScreenshot) driver;
File src = ts.getScreenshotAs(OutputType.FILE);
File dest = new File("screenshot.png");
FileUtils.copyFile(src, dest);
```

---

### 🧪 **10. Assertions (Using TestNG or JUnit)**

```java
Assert.assertEquals(driver.getTitle(), "Expected Title");
Assert.assertTrue(element.isDisplayed());
Assert.assertFalse(element.isSelected());
```

---

### 🧹 **11. Closing Browser**

```java
driver.close();     // Close current window
driver.quit();      // Quit entire browser session
```

---

## 📌 Suggested Practice Exercises:

* Automate login to [saucedemo.com](https://www.saucedemo.com/)
* Select options from dropdown
* Handle alerts
* Write an assertion to check page title
* Capture a screenshot after login

---

