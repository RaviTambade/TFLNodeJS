# Node.js + Express REST API  Boilerplate using a **clean folder structure**:

**Boilerplate code** refers to a **standard, reusable structure or template** of code that you can copy and use as a starting point for building software applications.

In the case of the Node.js + Express REST API example I gave:

* It sets up a typical **project structure** (with folders like `controllers`, `services`, `routes`, etc.)
* Includes **essential setup** (middleware, database connection, error handling)
* Implements **common patterns** (like separation of concerns using service and repository layers)

### ✅ Why Use Boilerplate Code?

1. **Saves time** – You don't need to write basic setup from scratch every time.
2. **Ensures consistency** – Developers across a team or company follow the same architecture.
3. **Makes scaling easier** – The structure supports adding features without becoming messy.
4. **Improves maintainability** – With clean separation (routes → controllers → services → repositories), each part is easier to test and update.

### 🚀 Example

Instead of starting with:

```js
const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello'));
app.listen(3000);
```

You start with a **boilerplate** that already:

* Connects to MongoDB
* Has middleware
* Handles errors
* Follows clean architecture


* `app.js` – main application file
* `routes/` – API route definitions
* `controllers/` – logic for handling requests/responses
* `services/` – business logic
* `repositories/` – database interaction (MongoDB via Mongoose)
* `middlewares/` – any middleware like error handling or authentication
* `models/` – Mongoose schemas

---

### ✅ Folder Structure

```
project-root/
│
├── app.js
├── package.json
│
├── config/
│   └── db.js
│
├── models/
│   └── User.js
│
├── routes/
│   └── userRoutes.js
│
├── controllers/
│   └── userController.js
│
├── services/
│   └── userService.js
│
├── repositories/
│   └── userRepository.js
│
├── middlewares/
│   └── errorMiddleware.js
```

---

### 1. `package.json` (initialize with `npm init -y`)

Install required packages:

```bash
npm install express mongoose morgan body-parser dotenv
```

---

### 2. `app.js`

```js
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');

dotenv.config();
connectDB();

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

---

### 3. `config/db.js`

```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

### 4. `models/User.js`

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
});

module.exports = mongoose.model('User', userSchema);
```

---

### 5. `routes/userRoutes.js`

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
```

---

### 6. `controllers/userController.js`

```js
const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
```

---

### 7. `services/userService.js`

```js
const userRepository = require('../repositories/userRepository');

exports.getAllUsers = async () => {
  return await userRepository.findAll();
};

exports.createUser = async (userData) => {
  return await userRepository.create(userData);
};
```

---

### 8. `repositories/userRepository.js`

```js
const User = require('../models/User');

exports.findAll = async () => {
  return await User.find({});
};

exports.create = async (data) => {
  const user = new User(data);
  return await user.save();
};
```

---

### 9. `middlewares/errorMiddleware.js`

```js
exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message || 'Internal Server Error' });
};
```

---

### 🔐 .env

```env
MONGO_URI=mongodb://localhost:27017/myapp
PORT=5000
```

---


