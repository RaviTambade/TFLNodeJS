# Node.js CRUD REST API** example with unit tests using:

* **Express** – to create the API
* **Mocha** – test runner
* **Chai** – assertion library
* **Supertest** – to test HTTP endpoints

---

## ✅ Step-by-Step Guide

### 1. 📁 Folder Structure

```
project/
├── app.js
├── routes.js
├── data.js
├── test/
│   └── api.test.js
├── package.json
```

---

### 2. 📦 Initialize Project & Install Dependencies

```bash
npm init -y
npm install express
npm install --save-dev mocha chai supertest
```

---

### 3. 🚀 REST API Code

#### `app.js`

```js
const express = require('express');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use('/api', routes);

const PORT = 3000;
if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app; // for testing
```

---

#### `data.js` (in-memory data store)

```js
let users = [];
let idCounter = 1;

module.exports = {
  getAll: () => users,
  getById: (id) => users.find((u) => u.id === id),
  create: (user) => {
    const newUser = { id: idCounter++, ...user };
    users.push(newUser);
    return newUser;
  },
  update: (id, updatedData) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return null;
    users[index] = { ...users[index], ...updatedData };
    return users[index];
  },
  remove: (id) => {
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },
  reset: () => {
    users = [];
    idCounter = 1;
  },
};
```

---

#### `routes.js`

```js
const express = require('express');
const router = express.Router();
const db = require('./data');

router.get('/users', (req, res) => {
  res.json(db.getAll());
});

router.get('/users/:id', (req, res) => {
  const user = db.getById(parseInt(req.params.id));
  user ? res.json(user) : res.status(404).json({ message: 'User not found' });
});

router.post('/users', (req, res) => {
  const newUser = db.create(req.body);
  res.status(201).json(newUser);
});

router.put('/users/:id', (req, res) => {
  const updated = db.update(parseInt(req.params.id), req.body);
  updated ? res.json(updated) : res.status(404).json({ message: 'User not found' });
});

router.delete('/users/:id', (req, res) => {
  const deleted = db.remove(parseInt(req.params.id));
  deleted ? res.status(204).end() : res.status(404).json({ message: 'User not found' });
});

module.exports = router;
```

---

### 4. 🧪 Unit Tests

#### `test/api.test.js`

```js
const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('supertest');
const app = require('../app');
const db = require('../data');

const { expect } = chai;
chai.use(chaiHttp);

describe('CRUD API /api/users', () => {
  beforeEach(() => db.reset());

  it('should create a new user', async () => {
    const res = await request(app).post('/api/users').send({ name: 'John' });
    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    expect(res.body.name).to.equal('John');
  });

  it('should get all users', async () => {
    db.create({ name: 'Jane' });
    const res = await request(app).get('/api/users');
    expect(res.status).to.equal(200);
    expect(res.body.length).to.equal(1);
  });

  it('should get user by id', async () => {
    const user = db.create({ name: 'Bob' });
    const res = await request(app).get(`/api/users/${user.id}`);
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal('Bob');
  });

  it('should return 404 for non-existing user', async () => {
    const res = await request(app).get('/api/users/999');
    expect(res.status).to.equal(404);
  });

  it('should update an existing user', async () => {
    const user = db.create({ name: 'Alice' });
    const res = await request(app).put(`/api/users/${user.id}`).send({ name: 'Alice Updated' });
    expect(res.status).to.equal(200);
    expect(res.body.name).to.equal('Alice Updated');
  });

  it('should delete a user', async () => {
    const user = db.create({ name: 'Mark' });
    const res = await request(app).delete(`/api/users/${user.id}`);
    expect(res.status).to.equal(204);
  });
});
```

---

### 5. 🏃 Run the Tests

Add this to your `package.json`:

```json
"scripts": {
  "test": "mocha"
}
```

Then run:

```bash
npm test
```

---

### ✅ Output

You'll see output like this:

```
CRUD API /api/users
  ✓ should create a new user
  ✓ should get all users
  ✓ should get user by id
  ✓ should return 404 for non-existing user
  ✓ should update an existing user
  ✓ should delete a user
```



 