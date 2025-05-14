# Test Cases
Test Cases based on the previously defined User Storiesfor the eCommerce Application. 
* Test Case ID
* Description
* Preconditions
* Test Steps
* Expected Result
* Priority

---

## ✅ **Test Cases for eCommerce Application**

---

### 🔐 **1. User Registration & Login**

| Test Case ID | Description                            | Preconditions       | Test Steps                                                                    | Expected Result                                     | Priority |
| ------------ | -------------------------------------- | ------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------- | -------- |
| TC-AUTH-01   | Register with valid email and password | None                | 1. Go to register page<br>2. Enter valid email & password<br>3. Submit        | User account is created and redirected to dashboard | High     |
| TC-AUTH-02   | Register with existing email           | User already exists | 1. Enter same email<br>2. Submit                                              | Error: "Email already exists"                       | High     |
| TC-AUTH-03   | Login with valid credentials           | User registered     | 1. Enter correct email/password<br>2. Submit                                  | User is logged in and redirected to dashboard       | High     |
| TC-AUTH-04   | Forgot password flow                   | User registered     | 1. Click “Forgot Password”<br>2. Enter email<br>3. Check email for reset link | Password reset link is received                     | Medium   |
| TC-AUTH-05   | Update user profile                    | User logged in      | 1. Go to profile page<br>2. Update fields<br>3. Save changes                  | Profile updated successfully                        | Medium   |

---

### 🛍️ **2. Product Management (Admin)**

| Test Case ID | Description                | Preconditions   | Test Steps                                      | Expected Result              | Priority |
| ------------ | -------------------------- | --------------- | ----------------------------------------------- | ---------------------------- | -------- |
| TC-PROD-01   | Add a new product          | Admin logged in | 1. Go to Add Product<br>2. Fill form<br>3. Save | Product appears in catalog   | High     |
| TC-PROD-02   | Edit existing product      | Product exists  | 1. Click edit<br>2. Change price<br>3. Save     | Product updated              | High     |
| TC-PROD-03   | Delete product             | Product exists  | 1. Click delete<br>2. Confirm                   | Product removed from catalog | Medium   |
| TC-PROD-04   | Product searchable by name | Product exists  | 1. Search by name                               | Product appears in results   | High     |

---

### 🛒 **3. Shopping Cart**

| Test Case ID | Description           | Preconditions  | Test Steps                               | Expected Result                      | Priority |
| ------------ | --------------------- | -------------- | ---------------------------------------- | ------------------------------------ | -------- |
| TC-CART-01   | Add item to cart      | Product exists | 1. Click "Add to cart"                   | Item added and shown in cart         | High     |
| TC-CART-02   | Remove item from cart | Item in cart   | 1. Click "Remove"                        | Item removed from cart               | High     |
| TC-CART-03   | Update item quantity  | Item in cart   | 1. Change quantity<br>2. Click update    | Quantity updated, total recalculated | High     |
| TC-CART-04   | Cart persistence      | User logged in | 1. Add item<br>2. Logout and login again | Cart retains items                   | High     |

---

### 💳 **4. Checkout & Payment**

| Test Case ID   | Description                           | Preconditions  | Test Steps                                         | Expected Result                        | Priority |
| -------------- | ------------------------------------- | -------------- | -------------------------------------------------- | -------------------------------------- | -------- |
| TC-CHECKOUT-01 | Enter valid shipping and billing info | User logged in | 1. Go to checkout<br>2. Enter details<br>3. Submit | Address saved, order proceeds          | High     |
| TC-CHECKOUT-02 | Payment with valid card               | Checkout ready | 1. Choose card<br>2. Enter details<br>3. Submit    | Payment successful, confirmation shown | High     |
| TC-CHECKOUT-03 | Order confirmation                    | Order placed   | 1. Complete payment                                | Confirmation page + email received     | High     |

---

### 📦 **5. Order Management**

| Test Case ID | Description                | Preconditions   | Test Steps                          | Expected Result                  | Priority |
| ------------ | -------------------------- | --------------- | ----------------------------------- | -------------------------------- | -------- |
| TC-ORDER-01  | View order history         | Orders placed   | 1. Go to "My Orders"                | List of orders displayed         | Medium   |
| TC-ORDER-02  | Track order status         | Order placed    | 1. Click on order<br>2. View status | Shows current status             | Medium   |
| TC-ORDER-03  | Admin updates order status | Admin logged in | 1. Change status to shipped         | Status changes and user notified | Medium   |

---

### 🔍 **6. Search & Filtering**

| Test Case ID | Description              | Preconditions  | Test Steps                                        | Expected Result         | Priority |
| ------------ | ------------------------ | -------------- | ------------------------------------------------- | ----------------------- | -------- |
| TC-SEARCH-01 | Search by product name   | Product exists | 1. Enter name in search                           | Product displayed       | High     |
| TC-SEARCH-02 | Filter by category/price | Products exist | 1. Apply category filter<br>2. Apply price filter | Matching products shown | Medium   |

---

### 🔔 **7. Notifications**

| Test Case ID | Description                             | Preconditions | Test Steps              | Expected Result         | Priority |
| ------------ | --------------------------------------- | ------------- | ----------------------- | ----------------------- | -------- |
| TC-NOTIFY-01 | Email on order confirmation             | Order placed  | 1. Place order          | Email confirmation sent | High     |
| TC-NOTIFY-02 | In-app notification for shipping update | Order shipped | 1. Admin updates status | User sees notification  | Medium   |

---

### 🛠️ **8. Admin Dashboard**

| Test Case ID | Description     | Preconditions   | Test Steps                      | Expected Result          | Priority |
| ------------ | --------------- | --------------- | ------------------------------- | ------------------------ | -------- |
| TC-ADMIN-01  | Admin login     | Valid admin     | 1. Login with admin credentials | Admin panel opens        | High     |
| TC-ADMIN-02  | View statistics | Admin logged in | 1. Go to Dashboard              | Shows orders and revenue | Medium   |

---

### ⚙️ **9. Non-Functional Test Cases**

| Test Case ID | Description               | Preconditions       | Test Steps               | Expected Result                      | Priority |
| ------------ | ------------------------- | ------------------- | ------------------------ | ------------------------------------ | -------- |
| TC-NFR-01    | Load time under 3 seconds | Application running | 1. Open homepage         | Page loads in < 3 seconds            | High     |
| TC-NFR-02    | SSL security check        | Site deployed       | 1. Check URL             | HTTPS with valid certificate         | High     |
| TC-NFR-03    | Concurrent users          | Load test tools     | 1. Simulate 10,000 users | No crashes, acceptable response time | High     |
| TC-NFR-04    | Accessibility test        | Site running        | 1. Use screen reader     | Proper reading of elements           | Medium   |
| TC-NFR-05    | Uptime monitoring         | Site hosted         | 1. Monitor 24/7          | >=99.9% uptime                       | High     |

 

 
