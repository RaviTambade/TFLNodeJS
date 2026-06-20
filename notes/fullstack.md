# DOM Programming, MERN Stack, and Insurance System Labs

This mentoring session focused on strengthening practical web development skills using **HTML, CSS, JavaScript, and the Document Object Model (DOM)** while connecting these concepts to larger software engineering practices and enterprise application development. The discussion reinforced the philosophy that successful developers evolve from **curiosity → capability → creation**, gaining confidence through continuous practice and project implementation.

### 1. Review of Previous DOM Programming Practice

##### Key Discussion Points

* Students reviewed previous DOM programming exercises.
* Practice included working on a **Student Information System**.
* The application demonstrated:

  * Searching students by ID.
  * Filtering displayed information.
  * Manipulating HTML elements dynamically.
* JavaScript was used to access elements through `document.getElementById()` and modify their properties.

##### Example DOM Operations

```javascript
let heading = document.getElementById("title");
heading.style.color = "blue";
heading.innerHTML = "Welcome Students";
```

Students also practiced:

* Reading textbox values
* Updating labels
* Changing CSS styles dynamically
* Displaying output using the browser console

 

### 2. Technical Troubleshooting

Common debugging topics included:

* Incorrect element IDs
* JavaScript execution before page loading
* Console logging for debugging
* Modifying styles dynamically

Example:

```javascript
console.log("Button Clicked");

document.getElementById("message").style.backgroundColor = "yellow";
document.getElementById("message").style.color = "red";
```

 

### 3. Learning Philosophy: Curiosity → Capability → Creation

##### Mentor Perspective

The objective is not merely to teach programming syntax but to develop:

* Problem-solving ability
* System thinking
* Software architecture understanding
* Confidence in building complete applications

###### Growth Journey

```
Curiosity
      ↓
Learn Concepts
      ↓
Practice Programs
      ↓
Build Projects
      ↓
Gain Capability
      ↓
Create Real Applications
```

Students are encouraged to become **digital creators rather than passive technology consumers**.

 

### 4. Core Programming Foundations

Regardless of language, every developer should master:

* Variables
* Data types
* Operators
* Conditional statements (`if`, `switch`)
* Looping constructs (`for`, `while`, `do-while`)
* Functions
* Arrays
* Objects
* JSON
* Event handling

These concepts apply across C, C++, Java, Python, JavaScript, and C#.

 

### 5. Overview of Application Technology Stacks

##### Common Programming Languages

* C
* C++
* Python
* Java
* C#

##### MERN Stack

| Layer    | Technology |
| -------- | ---------- |
| Database | MongoDB    |
| Backend  | Express.js |
| Frontend | React.js   |
| Runtime  | Node.js    |

##### MEAN Stack

| Layer    | Technology |
| -------- | ---------- |
| Database | MongoDB    |
| Backend  | Express.js |
| Frontend | Angular    |
| Runtime  | Node.js    |

 

### 6. Runtime Engines and Single Page Applications

##### Java Runtime

Java applications execute inside the **Java Virtual Machine (JVM)**, providing platform independence.

##### Node.js

Node.js enables JavaScript execution outside the browser and powers backend services.

##### Single Page Applications (SPA)

Frameworks like React and Angular load one HTML page and dynamically update content without full page reloads, resulting in faster and more responsive user experiences.

 

###### 7. Enterprise Development Frameworks

##### Java Enterprise Stack

* Spring Framework
* Spring MVC
* Spring Boot
* Oracle Database
* MySQL Database

##### Microsoft Stack

* ASP.NET MVC
* ASP.NET Core
* ADO.NET
* Entity Framework
* SQL Server

Students should understand templates, routing, controllers, models, and data access patterns across these ecosystems.



###### 8. MERN Stack Architecture

```
Browser
    │
    ▼
HTML + CSS
    │
    ▼
React Components
    │
    ▼
React Router
    │
    ▼
Node.js Server
    │
    ▼
Express Middleware
    │
    ▼
Authentication
    │
    ▼
Business Logic
    │
    ▼
MongoDB Database
```

Important backend concepts include:

* Routing
* Middleware
* Authentication
* Authorization
* Security
* Event handling
* Request and response processing

---

# 9. Lab 4 – Simple Login Form

##### Objective

Develop a basic login application using HTML and JavaScript.

###### UI Components

* Username textbox
* Password textbox
* Login button

###### Validation Logic

```javascript
if(username === "admin" && password === "1234"){
    alert("Login Successful");
}
else{
    alert("Invalid Credentials");
}
```

Learning outcomes:

* DOM access
* Button click events
* Reading textbox values
* Conditional statements
* Basic validation

---

### 10. Lab 5 – Customer Registration Form

##### Required Fields

* Customer Name
* Email Address
* Mobile Number
* Gender
* Nationality
* Interests
* Membership Type

###### Controls Used

| Field       | HTML Control       |
| ----------- | ------------------ |
| Name        | Textbox            |
| Email       | Email Input        |
| Mobile      | Number/Text        |
| Gender      | Radio Buttons      |
| Nationality | Checkbox or Select |
| Interests   | Checkboxes         |
| Membership  | Radio Buttons      |

Validation should ensure mandatory fields are completed before submission.

### 11. Membership Classifications

Three customer membership levels were discussed:

* Platinum
* Gold
* Silver

These classifications can influence discounts, premium services, and customer benefits.

---

### 12. Registration Form Requirements

The customer registration page should collect:

* Customer Name
* Email Address
* Mobile Number
* Gender
* Nationality
* Membership Category

Students are encouraged to implement client-side validation using JavaScript before processing submissions.

### 13. Insurance Policy System Development

The insurance application should include a **Create Policy** module capable of:

* Generating a unique Policy Number
* Generating a Customer Number
* Capturing policy details
* Associating policies with customers

Additional planned modules include:

* Claim Form
* Claim Report
* Policy Management


### 14. Dashboard Development

Students should create practical HTML pages such as:

##### Customer Dashboard

* View profile
* Register customer
* Update details
* Navigate to policies

##### Insurance Policy Dashboard

* Create policy
* View policies
* Submit forms
* Access claim functionality

These dashboards provide a simple interface for interacting with the insurance system.

### 15. Customer Relationship Management (CRM) Perspective

The insurance application should support CRM-oriented workflows by enabling:

* User login
* Customer registration
* Customer profile management
* Policy creation
* Claim submission
* Dashboard-based navigation

Implementation can begin with plain HTML and JavaScript before evolving into more advanced frameworks.


### Key Takeaways

* Master DOM manipulation to build interactive web pages.
* Use browser debugging tools and console output to troubleshoot JavaScript.
* Focus on progressing from **curiosity to capability to creation** through consistent practice.
* Understand modern technology stacks such as MERN and enterprise frameworks like Spring and ASP.NET.
* Build complete, validation-driven forms and dashboards as stepping stones toward real-world applications.
* Apply these concepts in practical projects such as customer management and insurance policy systems to strengthen software engineering skills.
