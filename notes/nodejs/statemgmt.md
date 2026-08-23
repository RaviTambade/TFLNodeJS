 # State Management Using Session in Node.js — Shopping Cart

> **Mentor says:**
> *“HTTP is stateless. But a shopping cart has a memory.
> So the application needs a mechanism to remember the customer between requests.”*

Imagine an e-commerce application.

A customer performs:

```text
1. Browse Products
2. Add Laptop to Cart
3. Add Mouse to Cart
4. Remove Mouse
5. Checkout
```

The browser sends a **separate HTTP request** for every action.

The challenge is:

```text
Request 1 → Add Laptop
Request 2 → Add Mouse
Request 3 → View Cart
```

How does the server know that all three requests belong to the **same customer's cart**?

This is where **session management** comes in.

---

# 1. Why do we need State Management?

HTTP is fundamentally **stateless**.

```text
Request 1
   ↓
Server
   ↓
Response

Request 2
   ↓
Server
   ↓
Response
```

The server does not automatically remember Request 1 when Request 2 arrives.

But business applications need memory.

For example:

```text
Login
Shopping Cart
Wishlist
User Preferences
Multi-step Forms
Checkout Process
Temporary Data
```

We therefore introduce:

```text
              HTTP Request
                    ↓
              Session ID
                    ↓
              Session Store
                    ↓
             User's State
```

---

# 2. What is a Session?

A **session** is server-side state associated with a particular client.

Usually the browser receives a session identifier through a cookie.

Conceptually:

```text
Browser
   │
   │ Cookie: sessionId=ABC123
   ↓
Express Server
   │
   │
   ↓
Session Store

ABC123
  ↓
{
   userId: 101,
   cart: [...]
}
```

The browser doesn't need to carry the entire shopping cart.

It carries the **session identifier**.

---

# 3. Shopping Cart Example

Suppose Ravi adds a laptop.

```text
POST /cart/add
```

The server stores:

```javascript
session.cart = [
    {
        productId: 101,
        name: "Laptop",
        quantity: 1,
        price: 75000
    }
];
```

Later:

```text
GET /cart
```

The server retrieves the same session:

```javascript
req.session.cart
```

and returns the cart.

---

# 4. Express Session

For Express applications, a common approach is `express-session`.

Install:

```bash
npm install express-session
```

Configure it:

```javascript
const express = require("express");
const session = require("express-session");

const app = express();

app.use(express.json());

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
    })
);
```

Now every request has access to:

```javascript
req.session
```

---

# 5. Creating a Shopping Cart

Let's build a simple cart.

```javascript
app.post("/cart/add", (req, res) => {

    const { productId, name, price, quantity } = req.body;

    if (!req.session.cart) {
        req.session.cart = [];
    }

    req.session.cart.push({
        productId,
        name,
        price,
        quantity
    });

    res.json({
        message: "Product added to cart",
        cart: req.session.cart
    });
});
```

Now the session remembers the cart.

---

# 6. Get Cart

```javascript
app.get("/cart", (req, res) => {

    const cart = req.session.cart || [];

    res.json({
        items: cart
    });
});
```

Request:

```text
GET /cart
```

Response:

```json
{
    "items": [
        {
            "productId": 101,
            "name": "Laptop",
            "price": 75000,
            "quantity": 1
        }
    ]
}
```

---

# 7. Remove Item

```javascript
app.delete("/cart/:productId", (req, res) => {

    const productId = Number(req.params.productId);

    if (!req.session.cart) {
        return res.json({
            items: []
        });
    }

    req.session.cart =
        req.session.cart.filter(
            item => item.productId !== productId
        );

    res.json({
        message: "Product removed",
        cart: req.session.cart
    });
});
```

---

# 8. Increase Quantity Instead of Duplicating Items

A better implementation checks whether the product already exists.

```javascript
app.post("/cart/add", (req, res) => {

    const {
        productId,
        name,
        price,
        quantity = 1
    } = req.body;

    if (!req.session.cart) {
        req.session.cart = [];
    }

    const existingItem =
        req.session.cart.find(
            item => item.productId === productId
        );

    if (existingItem) {

        existingItem.quantity += quantity;

    } else {

        req.session.cart.push({
            productId,
            name,
            price,
            quantity
        });
    }

    res.json({
        message: "Cart updated",
        cart: req.session.cart
    });
});
```

Now:

```text
Add Laptop × 1
       ↓
Cart

Laptop × 1

Add Laptop × 2
       ↓
Cart

Laptop × 3
```

That's closer to real application behavior.

---

# 9. Calculate Cart Total

Do not blindly trust the total sent by the browser.

Calculate it on the server.

```javascript
app.get("/cart", (req, res) => {

    const cart = req.session.cart || [];

    const total = cart.reduce(
        (sum, item) =>
            sum + item.price * item.quantity,
        0
    );

    res.json({
        items: cart,
        total: total
    });
});
```

Example:

```text
Laptop       ₹75,000 × 1
Mouse         ₹1,500 × 2
Keyboard      ₹2,500 × 1
-------------------------
Total        ₹80,500
```

---

# 10. A Better Architecture

Don't put all shopping-cart logic inside Express routes.

A production application can be structured as:

```text
                HTTP Request
                     ↓
                  Router
                     ↓
                Controller
                     ↓
                 CartService
                     ↓
              Session / Database
```

For example:

```javascript
class CartService {

    addItem(cart, product) {

        const existingItem =
            cart.find(
                item =>
                    item.productId === product.productId
            );

        if (existingItem) {
            existingItem.quantity += product.quantity;
        } else {
            cart.push(product);
        }

        return cart;
    }

    calculateTotal(cart) {

        return cart.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    }
}
```

Controller:

```javascript
app.post("/cart/add", (req, res) => {

    const service = new CartService();

    const cart =
        req.session.cart || [];

    const updatedCart =
        service.addItem(cart, req.body);

    req.session.cart = updatedCart;

    res.json(updatedCart);
});
```

Now business logic is testable independently.

---

# 11. Session vs Database

This is an important architectural decision.

### Session

Good for:

```text
Temporary state
Shopping cart
Wizard state
Anonymous user state
Short-lived preferences
```

### Database

Good for:

```text
Orders
Customers
Payments
Policies
Claims
Products
Permanent cart
```

For example:

```text
Anonymous Customer
        ↓
Session Cart
        ↓
Login
        ↓
Customer identified
        ↓
Merge Session Cart
        ↓
Database Cart
```

This is a common real-world pattern.

---

# 12. Important Best Practice — Don't Store Everything in Session

Avoid:

```javascript
req.session.user = entireUserObject;
req.session.products = thousandsOfProducts;
req.session.orders = allOrders;
```

Instead store small identifiers:

```javascript
req.session.userId = user.id;
req.session.cartId = cart.id;
```

Keep large or persistent data in the database.

---

# 13. Session Store Matters

One important warning for learners:

The default `MemoryStore` used by `express-session` is **not suitable for production**.

For production, use a shared/persistent session store such as Redis or another supported store.

Architecture:

```text
                Load Balancer
                     │
             ┌───────┴───────┐
             ↓               ↓
         Express 1       Express 2
             │               │
             └───────┬───────┘
                     ↓
                   Redis
                     ↓
              Session State
```

This becomes important when you have multiple application instances.

---

# 14. Session Security Best Practices 🔐

Configure cookies carefully.

For production, consider:

```javascript
app.use(
    session({
        secret: process.env.SESSION_SECRET,

        resave: false,

        saveUninitialized: false,

        cookie: {
            httpOnly: true,
            secure: true,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60
        }
    })
);
```

Important concepts:

### `httpOnly`

JavaScript running in the browser cannot directly read the cookie.

### `secure`

Cookie should be sent over HTTPS.

### `sameSite`

Helps control cross-site cookie behavior.

### `maxAge`

Defines the cookie lifetime.

---

# 15. Regenerate Session After Login

A good security practice is to regenerate the session when authentication state changes, helping prevent session fixation.

Conceptually:

```javascript
app.post("/login", async (req, res, next) => {

    // authenticate user...

    req.session.regenerate(err => {

        if (err) {
            return next(err);
        }

        req.session.userId = user.id;

        res.json({
            message: "Login successful"
        });
    });
});
```

On logout:

```javascript
app.post("/logout", (req, res, next) => {

    req.session.destroy(err => {

        if (err) {
            return next(err);
        }

        res.json({
            message: "Logged out"
        });
    });
});
```

---

# 16. Session-Based Cart — Complete Flow

Now connect everything.

```text
                Customer
                   │
                   ↓
             Browse Products
                   │
                   ↓
             Add to Cart
                   │
                   ↓
          Express Session
                   │
                   ↓
             Shopping Cart
                   │
          ┌────────┴─────────┐
          ↓                  ↓
      Add Item          Remove Item
          │                  │
          └────────┬─────────┘
                   ↓
               View Cart
                   │
                   ↓
                Checkout
                   │
                   ↓
              Create Order
                   │
                   ↓
             Database
```

The important transition is:

```text
Temporary State
      ↓
    Session
      ↓
   Checkout
      ↓
Permanent State
      ↓
   Database
```

---

# 🌸 Transflower Mentor's Key Learning

When teaching Express, don't teach **Session** merely as another middleware.

Teach the problem first:

> **“HTTP forgets. Business applications remember.”**

Then introduce:

```text
HTTP
 ↓
Stateless
 ↓
Need State
 ↓
Session
 ↓
Cookie + Session ID
 ↓
Session Store
 ↓
Shopping Cart
```

And finally take learners one step further:

```text
Beginner
   ↓
req.session.cart

Intermediate
   ↓
CartService + Session

Advanced
   ↓
Redis Session Store

Production
   ↓
Session + Database + Authentication
   ↓
Distributed / Scalable Architecture
```

> **Mentor says:**
> *“A shopping cart is not just an array. It is a lesson in state management, identity, sessions, persistence, security and distributed application architecture.”* 🌸
