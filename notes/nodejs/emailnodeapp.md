# 🌼 Student Workbook

## Module: Automated Email Service (React + Node.js REST API)


## 🎯 Module Purpose

This workbook helps you **learn, practice, and reflect** on building a real-world automated email service using **React + Node.js**, guided by the **Transflower Learning Framework**.

You are not just writing code. You are learning **how professional systems are designed, layered, and secured**.


## 🧠 Learning Outcomes

By the end of this module, you will be able to:

* Explain why frontend applications should not send emails directly
* Design a layered backend using Router, Controller, and Service
* Implement a secure email service using Nodemailer and Gmail
* Apply separation of concerns confidently
* Think like a solution developer, not just a coder


## 🌼 Transflower Learning Philosophy (Student View)

> *"Software is not written in one place. It flows through responsibilities."*

This module follows the principle:

**Intent → Direction → Coordination → Decision → Execution**

## 🧩 System Architecture (Conceptual)

### Flow You Will Build

1. User clicks a button in React UI
2. React sends intent to backend API
3. Router forwards the request
4. Controller validates and coordinates
5. Service executes business logic
6. Gmail SMTP sends the email

## 📁 Project Folder Structure (Backend)

```
email-service-api/
│
├── src/
│   ├── controllers/
│   │   └── email.controller.js
│   ├── services/
│   │   └── email.service.js
│   ├── routes/
│   │   └── router.js
│   ├── config/
│   │   └── mail.config.js
│   └── app.js
│
├── .env
├── server.js
└── package.json
```

## 🎨 Layer 1: Experience Layer (React)

### Your Responsibility

* Capture user intent
* Trigger backend API
* Do NOT implement business logic

### Reflection Question

> Why should React not contain email credentials or SMTP logic?

✍️ Your Answer:

## 🚦 Layer 2: Routing Layer

### Purpose

* Map URLs to controllers
* Keep routing clean and predictable

### Key Learning

> Routes know *paths*, not *rules*.

### Exercise

List two advantages of having a separate routing layer:

1. ---
2. ---

## 🎮 Layer 3: Controller Layer

### Responsibilities

* Receive HTTP request
* Validate input
* Call the appropriate service
* Send HTTP response

### Think Like a Mentor

> A controller is a **traffic police**, not a worker.

### Exercise

What should NOT be written inside a controller?

- ☐ SMTP logic
- ☐ Business rules
- ☐ HTTP handling
- ☐ Response formatting


## 🧠 Layer 4: Service Layer

### Responsibilities

* Business logic
* Decision making
* Interaction with infrastructure

### Key Insight

> Services are reusable, testable, and intelligent.

### Exercise

Imagine you want to add OTP email verification.
Where should the OTP generation logic live?

✍️ Your Answer:

## 🔐 Layer 5: Infrastructure Layer

### Components Used

* Nodemailer
* Gmail SMTP
* Environment variables

### Security Rule

> Secrets must live outside the code.

### Exercise

Why is using Gmail App Password safer than using your real Gmail password?

✍️ Your Answer:


## 🔁 End-to-End Flow (Student Recall)

Fill in the blanks:

React UI → ______ → Controller → ______ → Gmail SMTP



## 🧪 Hands-on Assignment

### Task 1: Core Implementation

* Build the email service exactly as discussed
* Send an email to your own Gmail account

### Task 2: Reflection

Write 5–6 lines answering:

> How does this architecture help in real-world applications?


## 🌱 Extension Challenges (Optional)

Choose **any one**:

* Add HTML email template
* Add OTP verification email
* Log email requests to a file
* Add role-based email trigger



## 🧭 Self-Evaluation Checklist

- ☐ I understand why UI should be thin
- ☐ I can explain Controller vs Service
- ☐ I can design folder structures
- ☐ I respect security boundaries
- ☐ I can explain this flow to another student


## 🌼 Mentor Note to Student

> *"You are no longer just learning how to send an email.
> You are learning how software systems communicate responsibly."*

Take this mindset forward — it applies to **payments, notifications, authentication, and microservices**.
 