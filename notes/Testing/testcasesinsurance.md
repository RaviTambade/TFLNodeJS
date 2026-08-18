# 🌸 Designing Test Cases for an Insurance Application

Let us take the **same thinking we used for the eCommerce application** and move it into our **Insurance Management System**. Imagine our application is for **Max Insurance Company**. We have different actors:

```text
                    Insurance Application
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
     Customer             Agent            Admin
        │                  │                  │
        ▼                  ▼                  ▼
    Purchase           Manage Policy      Manage Users
      Policy             Customers          Reports
        │
        ▼
   Pay Premium
        │
        ▼
      Claim
```

Now I tell my learners: **“Don't test screens. Test business behavior.”**

A good tester doesn't simply ask:

> “Does the Purchase Policy button work?”

A better tester asks:

> **“What should happen to the customer, policy, premium, payment and database when a customer purchases a policy?”**

That is the developer mindset.


## 1. User Registration & Authentication 

Our insurance system has customers, agents, managers and administrators.

| Test Case ID | Description                          | Preconditions            | Test Steps                                                            | Expected Result                                     | Priority |
| ------------ | ------------------------------------ | ------------------------ | --------------------------------------------------------------------- | --------------------------------------------------- | -------- |
| TC-AUTH-01   | Register with valid customer details | User not registered      | 1. Open Register<br>2. Enter valid name, email, password<br>3. Submit | Customer account is created successfully            | High     |
| TC-AUTH-02   | Register with existing email         | Email already registered | 1. Enter existing email<br>2. Submit                                  | System displays "Email already exists"              | High     |
| TC-AUTH-03   | Login with valid credentials         | Customer registered      | 1. Enter email/password<br>2. Login                                   | Customer dashboard is displayed                     | High     |
| TC-AUTH-04   | Login with invalid password          | Customer registered      | 1. Enter valid email<br>2. Enter incorrect password                   | Login fails with appropriate message                | High     |
| TC-AUTH-05   | Logout                               | User logged in           | 1. Click Logout                                                       | Session/token is invalidated and login page appears | High     |
| TC-AUTH-06   | Unauthorized access to Admin API     | Customer logged in       | 1. Call Admin API                                                     | Access is denied                                    | High     |

### Mentor Question

I would ask:

> **“Why is TC-AUTH-06 more important than simply testing the login screen?”**

Because authentication answers:

> **Who are you?**

Authorization answers:

> **What are you allowed to do?**

That distinction becomes extremely important in an enterprise insurance application.

 

## 2. Customer Management 👤

A customer is at the center of our insurance system.

```text
Customer
   │
   ├── Personal Information
   ├── Contact Information
   ├── Policies
   ├── Premiums
   └── Claims
```

| Test Case ID | Description                        | Preconditions          | Test Steps                            | Expected Result                        | Priority |
| ------------ | ---------------------------------- | ---------------------- | ------------------------------------- | -------------------------------------- | -------- |
| TC-CUST-01   | Create customer profile            | User registered        | Enter valid customer details and save | Customer profile is created            | High     |
| TC-CUST-02   | Update customer profile            | Customer exists        | Modify mobile/address and save        | Updated information is persisted       | Medium   |
| TC-CUST-03   | View customer profile              | Customer logged in     | Open My Profile                       | Correct customer information displayed | Medium   |
| TC-CUST-04   | Prevent duplicate customer email   | Customer exists        | Register same email                   | Duplicate customer is rejected         | High     |
| TC-CUST-05   | Validate mandatory customer fields | Registration page open | Leave mandatory fields blank          | Validation messages displayed          | Medium   |

 

## 3. Policy Management 📄

Now we reach the **heart of the insurance application**.

Suppose we have:

```text
LifePolicy
HealthPolicy
VehiclePolicy
```

Each policy may have different premium calculation rules.

```text
                  Policy
                    │
          CalculatePremium()
                    │
       ┌────────────┼────────────┐
       ▼            ▼            ▼
   LifePolicy   HealthPolicy  VehiclePolicy
       │            │            │
       ▼            ▼            ▼
 Different      Different     Different
 calculation    calculation   calculation
```

Now our test cases should verify **business rules**, not just UI behavior.

| Test Case ID | Description                         | Preconditions             | Test Steps                                   | Expected Result                           | Priority |
| ------------ | ----------------------------------- | ------------------------- | -------------------------------------------- | ----------------------------------------- | -------- |
| TC-POL-01    | Create Life Insurance policy        | Agent/Admin logged in     | Enter valid customer and Life Policy details | Policy created successfully               | High     |
| TC-POL-02    | Create Health Insurance policy      | Agent/Admin logged in     | Enter valid health policy details            | Health policy created                     | High     |
| TC-POL-03    | Create Vehicle Insurance policy     | Agent/Admin logged in     | Enter valid vehicle details                  | Vehicle policy created                    | High     |
| TC-POL-04    | View policy details                 | Policy exists             | Search policy number                         | Correct policy information displayed      | High     |
| TC-POL-05    | Search policy by policy number      | Policy exists             | Enter policy number                          | Matching policy displayed                 | High     |
| TC-POL-06    | Reject invalid policy data          | Policy form open          | Enter invalid values                         | Validation error displayed                | High     |
| TC-POL-07    | Policy assigned to correct customer | Customer and policy exist | Purchase policy                              | Policy is linked to correct customer      | High     |
| TC-POL-08    | Policy number generated uniquely    | New policy creation       | Create multiple policies                     | Each policy receives unique policy number | High     |

 
## 4. Premium Calculation 💰

Now I would stop the class and say:

> **“Students, this is where testing becomes interesting.”**

Suppose:

```text
Life Policy
Sum Assured = ₹10,00,000
Age = 30
Term = 20 years
```

Our system calculates:

```text
Premium = Business Rule(age, sumAssured, term, ...)
```

We need to test the **calculation**, not just the screen.

| Test Case ID | Description                             | Preconditions          | Test Steps                | Expected Result                | Priority |
| ------------ | --------------------------------------- | ---------------------- | ------------------------- | ------------------------------ | -------- |
| TC-PREM-01   | Calculate premium for valid Life Policy | Valid policy data      | Enter policy parameters   | Correct premium calculated     | High     |
| TC-PREM-02   | Calculate Health Policy premium         | Valid health details   | Enter age, coverage etc.  | Correct premium calculated     | High     |
| TC-PREM-03   | Calculate Vehicle Policy premium        | Valid vehicle details  | Enter vehicle information | Correct premium calculated     | High     |
| TC-PREM-04   | Invalid age                             | Policy form open       | Enter invalid age         | Validation error displayed     | High     |
| TC-PREM-05   | Invalid sum assured                     | Policy form open       | Enter invalid amount      | System rejects invalid amount  | High     |
| TC-PREM-06   | Premium recalculation                   | Policy details changed | Change coverage amount    | Premium recalculated correctly | High     |

### Developer Thinking

This is a perfect candidate for **unit testing**.

For example:

```text
CalculatePremium()
       │
       ├── Normal case
       ├── Minimum value
       ├── Maximum value
       ├── Boundary value
       └── Invalid value
```

The important lesson:

> **Business logic deserves automated tests.**

 

## 5. Purchase Policy 🛒 → 📄

In eCommerce:

```text
Add Product → Cart → Checkout → Payment
```

In insurance:

```text
Select Policy
      ↓
Enter Customer Details
      ↓
Calculate Premium
      ↓
Confirm Policy
      ↓
Make First Payment
      ↓
Policy Activated
```

Test cases:

| Test Case ID | Description                                                | Preconditions          | Test Steps                   | Expected Result                       | Priority |
| ------------ | ---------------------------------------------------------- | ---------------------- | ---------------------------- | ------------------------------------- | -------- |
| TC-PUR-01    | Purchase valid policy                                      | Customer logged in     | Select policy and submit     | Policy purchase initiated             | High     |
| TC-PUR-02    | Purchase without customer details                          | Customer logged in     | Leave mandatory fields blank | Purchase blocked                      | High     |
| TC-PUR-03    | Purchase policy with premium calculation                   | Valid policy           | Select policy                | Correct premium displayed             | High     |
| TC-PUR-04    | Purchase duplicate policy where business rule prohibits it | Existing active policy | Attempt same purchase        | System rejects duplicate              | High     |
| TC-PUR-05    | Verify policy ownership                                    | Policy purchased       | Open My Policies             | Policy appears under correct customer | High     |

 

## 6. First Premium Payment 💳

This is a critical business workflow.

```text
Policy Created
      ↓
Premium Due
      ↓
Payment
      ↓
Payment Successful
      ↓
Policy Activated
```

| Test Case ID | Description                        | Preconditions                     | Test Steps                             | Expected Result                                         | Priority |
| ------------ | ---------------------------------- | --------------------------------- | -------------------------------------- | ------------------------------------------------------- | -------- |
| TC-PAY-01    | Make first premium payment         | Policy created, payment due       | Click Pay Premium and complete payment | Payment successful                                      | Critical |
| TC-PAY-02    | Payment with invalid details       | Payment page open                 | Enter invalid payment information      | Payment rejected                                        | High     |
| TC-PAY-03    | Payment failure                    | Payment gateway unavailable/fails | Attempt payment                        | Failure message displayed and policy remains consistent | Critical |
| TC-PAY-04    | Prevent duplicate payment          | Payment already successful        | Submit payment again                   | Duplicate transaction prevented                         | Critical |
| TC-PAY-05    | Verify payment record              | Payment successful                | Open payment history                   | Correct transaction recorded                            | High     |
| TC-PAY-06    | Verify policy status after payment | Payment successful                | Open policy                            | Policy status changes according to business rules       | Critical |

### Mentor Question

Ask learners:

> **“What happens if payment succeeds but policy activation fails?”**

Now you have entered the world of **transaction management, distributed systems and reliability**.

That is where software engineering becomes much more interesting than CRUD.

 
## 7. Premium Renewal 🔄

A policy doesn't end with the first payment.

```text
Policy Active
     ↓
Premium Due
     ↓
Reminder
     ↓
Payment
     ↓
Next Due Date
```

| Test Case ID | Description                              | Preconditions                | Test Steps           | Expected Result                        | Priority |
| ------------ | ---------------------------------------- | ---------------------------- | -------------------- | -------------------------------------- | -------- |
| TC-REN-01    | Display upcoming premium                 | Active policy                | Open policy          | Correct due date displayed             | High     |
| TC-REN-02    | Pay renewal premium                      | Premium due                  | Make payment         | Payment recorded successfully          | High     |
| TC-REN-03    | Successful renewal updates next due date | Renewal successful           | View policy          | Next premium date calculated correctly | High     |
| TC-REN-04    | Failed renewal                           | Payment failure              | Attempt payment      | Policy status remains consistent       | High     |
| TC-REN-05    | Renewal reminder                         | Premium approaching due date | Run reminder process | Customer receives notification         | Medium   |

 

## 8. Claims Management 🚨

Now we move into another major insurance workflow.

```text
Customer
   ↓
Submit Claim
   ↓
Claim Verification
   ↓
Claim Assessment
   ↓
Approval / Rejection
   ↓
Settlement
```

| Test Case ID | Description                      | Preconditions      | Test Steps                       | Expected Result                            | Priority |
| ------------ | -------------------------------- | ------------------ | -------------------------------- | ------------------------------------------ | -------- |
| TC-CLM-01    | Submit valid claim               | Active policy      | Enter claim details and submit   | Claim created successfully                 | Critical |
| TC-CLM-02    | Submit claim for inactive policy | Policy inactive    | Submit claim                     | Claim rejected according to business rules | Critical |
| TC-CLM-03    | View claim status                | Claim exists       | Open My Claims                   | Current claim status displayed             | High     |
| TC-CLM-04    | Claims officer approves claim    | Claim under review | Approve claim                    | Claim status becomes Approved              | Critical |
| TC-CLM-05    | Claims officer rejects claim     | Claim under review | Reject claim with reason         | Claim becomes Rejected and reason recorded | High     |
| TC-CLM-06    | Unauthorized user accesses claim | Customer logged in | Attempt another customer's claim | Access denied                              | Critical |

 

## 9. Role-Based Access Control 🔐

Our insurance application has multiple roles:

```text
Admin
Manager
Agent
Customer
ClaimsOfficer
AccountsOfficer
```

Now we need to test:

> **Who can do what?**

| Test Case ID | Description                                   | Preconditions              | Test Steps             | Expected Result            | Priority |
| ------------ | --------------------------------------------- | -------------------------- | ---------------------- | -------------------------- | -------- |
| TC-ROLE-01   | Customer accesses own policy                  | Customer logged in         | Open My Policies       | Own policies displayed     | Critical |
| TC-ROLE-02   | Customer accesses another customer's policy   | Customer logged in         | Request another policy | Access denied              | Critical |
| TC-ROLE-03   | Agent creates policy                          | Agent logged in            | Create policy          | Policy created             | High     |
| TC-ROLE-04   | Customer creates admin user                   | Customer logged in         | Call admin API         | Access denied              | Critical |
| TC-ROLE-05   | Claims Officer manages claims                 | Claims Officer logged in   | Open claims module     | Claims functions available | High     |
| TC-ROLE-06   | Accounts Officer accesses payment information | Accounts Officer logged in | Open payment module    | Authorized access granted  | High     |

This is where **JWT authentication + authorization policies/roles** become part of our quality strategy.

 

## 10. Notifications 📧

Insurance applications generate many important events.

```text
Policy Purchased
      ↓
Confirmation Email

Premium Due
      ↓
Reminder

Payment Successful
      ↓
Receipt

Claim Approved
      ↓
Notification
```

| Test Case ID | Description                  | Preconditions                | Test Steps               | Expected Result                                         | Priority |
| ------------ | ---------------------------- | ---------------------------- | ------------------------ | ------------------------------------------------------- | -------- |
| TC-NOT-01    | Policy purchase confirmation | Policy purchased             | Complete purchase        | Confirmation notification sent                          | High     |
| TC-NOT-02    | Payment receipt              | Payment successful           | Complete payment         | Receipt generated/sent                                  | High     |
| TC-NOT-03    | Premium reminder             | Premium approaching due date | Execute reminder process | Reminder sent                                           | Medium   |
| TC-NOT-04    | Claim approval notification  | Claim approved               | Approve claim            | Customer receives notification                          | High     |
| TC-NOT-05    | Failed email delivery        | Email service unavailable    | Trigger notification     | Failure handled without corrupting business transaction | High     |

 

## 11. Admin Dashboard 📊

| Test Case ID | Description                   | Preconditions      | Test Steps           | Expected Result              | Priority |
| ------------ | ----------------------------- | ------------------ | -------------------- | ---------------------------- | -------- |
| TC-ADMIN-01  | Admin login                   | Valid admin        | Login                | Admin dashboard displayed    | High     |
| TC-ADMIN-02  | View policy statistics        | Admin logged in    | Open dashboard       | Policy statistics displayed  | Medium   |
| TC-ADMIN-03  | View premium statistics       | Admin logged in    | Open dashboard       | Premium statistics displayed | Medium   |
| TC-ADMIN-04  | View claim statistics         | Admin logged in    | Open dashboard       | Claim statistics displayed   | Medium   |
| TC-ADMIN-05  | Unauthorized dashboard access | Customer logged in | Open Admin dashboard | Access denied                | Critical |

 

## 12. Non-Functional Testing

Now I tell my learners:

> **“Functional testing asks whether the system does the right thing. Non-functional testing asks how well the system does it.”**

| Test Case ID | Description                | Test Steps                                | Expected Result                        | Priority |
| ------------ | -------------------------- | ----------------------------------------- | -------------------------------------- | -------- |
| TC-NFR-01    | API response time          | Send policy API request under normal load | Response within defined SLA            | High     |
| TC-NFR-02    | Concurrent policy requests | Simulate concurrent users                 | System remains stable                  | High     |
| TC-NFR-03    | Authentication security    | Attempt unauthorized API access           | Request rejected                       | Critical |
| TC-NFR-04    | HTTPS security             | Access application                        | Secure HTTPS connection                | High     |
| TC-NFR-05    | Database failure handling  | Simulate DB failure                       | Application handles failure gracefully | Critical |
| TC-NFR-06    | API availability           | Monitor application                       | Availability meets defined SLA         | High     |
| TC-NFR-07    | Accessibility              | Navigate using keyboard/screen reader     | Important workflows remain accessible  | Medium   |
| TC-NFR-08    | Auditability               | Perform policy/payment/claim operation    | Appropriate audit information recorded | High     |


# 🌸 Now Let's Think Like an Insurance Developer

I would draw this on the classroom board:

```text
                  USER STORY
                      │
                      ▼
              Acceptance Criteria
                      │
                      ▼
                 Test Cases
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
        Unit       Integration    UI/API
        Tests        Tests        Tests
          │           │           │
          └───────────┼───────────┘
                      ▼
                Automated Tests
                      │
                      ▼
                  CI Pipeline
                      │
              ┌───────┴───────┐
              ▼               ▼
            PASS             FAIL
              │               │
              ▼               ▼
          Deployment        Fix Bug
```

And I would tell the learners:

> **A User Story tells us what the business wants.**
> **Acceptance Criteria tells us what success means.**
> **Test Cases tell us how we will verify that success.**
> **Automated Tests give us repeatability.**
> **CI gives us continuous verification.**


# One Complete Insurance User Story

For example:

### User Story

> **As a customer, I want to purchase a Life Insurance policy so that I can protect my family.**

Acceptance criteria might be:

```text
1. Customer must be authenticated.
2. Customer must provide valid policy information.
3. Premium must be calculated correctly.
4. Customer must confirm the policy.
5. First premium payment must succeed.
6. Payment must be recorded.
7. Policy status must be updated.
8. Customer must receive confirmation.
```

Now our test cases naturally emerge:

```text
TC-AUTH
    ↓
TC-POL
    ↓
TC-PREM
    ↓
TC-PUR
    ↓
TC-PAY
    ↓
TC-NOT
```

This is the important Transflower lesson:  **Don't randomly create test cases. Derive them from business behavior.**



# 🌱 From Test Case to Automation

Eventually, the manual test:

```text
Customer Login
      ↓
Select Life Policy
      ↓
Enter Details
      ↓
Calculate Premium
      ↓
Pay Premium
      ↓
Verify Policy
```

can become an automated test.

For example, at API level:

```text
POST /login
      ↓
POST /policies
      ↓
POST /payments
      ↓
GET /policies/{id}
      ↓
Assert status
      ↓
Assert premium
      ↓
Assert payment
```

And then:

```text
Developer Push
      ↓
Git
      ↓
CI
      ↓
Build
      ↓
Unit Tests
      ↓
Integration Tests
      ↓
API Tests
      ↓
Coverage
      ↓
Security Checks
      ↓
Quality Gate
      ↓
Deploy
```

That is where your learners move from **“I know CRUD”** to: **“I know how to engineer a reliable insurance application.”**. The final mindset is: **Requirement → User Story → Acceptance Criteria → Test Case → Automated Test → CI → Quality Gate → Production Confidence.**