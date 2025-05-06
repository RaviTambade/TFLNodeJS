**commonly used Mongoose functions** that are essential for working with MongoDB in a Node.js application:

---

## 🧰 Commonly Used Mongoose Functions

### 1. **`mongoose.connect()`**

> 🔗 Connects your Node.js app to the MongoDB database.

```js
mongoose.connect('mongodb://localhost:27017/mydb');
```

---

### 2. **`Schema` and `model()`**

> 🏗 Define the structure of your documents and create a model to interact with the collection.

```js
const userSchema = new mongoose.Schema({ name: String, age: Number });
const User = mongoose.model('User', userSchema);
```

---

### 3. **`Model.create()`**

> ➕ Inserts one or more documents into the collection.

```js
User.create({ name: 'Alice', age: 25 });
```

---

### 4. **`Model.find()`**

> 🔍 Finds all documents that match the condition (or all if no condition).

```js
User.find({ age: { $gt: 18 } }); // All users older than 18
```

---

### 5. **`Model.findOne()`**

> 🔍 Finds the **first** document that matches the condition.

```js
User.findOne({ name: 'Alice' });
```

---

### 6. **`Model.findById()`**

> 🔍 Finds a document using its **ObjectId**.

```js
User.findById('660fce55a7d8c50f7c2abc12');
```

---

### 7. **`Model.updateOne()` / `Model.updateMany()`**

> 🛠 Updates one or many documents that match the condition.

```js
User.updateOne({ name: 'Alice' }, { age: 26 });
User.updateMany({ age: { $lt: 18 } }, { minor: true });
```

---

### 8. **`Model.findByIdAndUpdate()`**

> 🔄 Finds a document by ID and updates it.

```js
User.findByIdAndUpdate(id, { name: 'Bob' });
```

---

### 9. **`Model.deleteOne()` / `Model.deleteMany()`**

> 🗑 Deletes one or many documents.

```js
User.deleteOne({ name: 'Alice' });
User.deleteMany({ age: { $lt: 13 } });
```

---

### 10. **`Model.findByIdAndDelete()`**

> 🧹 Deletes a document by its ObjectId.

```js
User.findByIdAndDelete(id);
```

---

### 11. **`save()`**

> 💾 Saves a new document or updates an existing one.

```js
const user = new User({ name: 'Charlie', age: 30 });
user.save();
```

---

### 12. **`countDocuments()`**

> 🔢 Returns the number of documents that match the condition.

```js
User.countDocuments({ age: { $gte: 18 } });
```

---

### 13. **`Model.exists()`**

> ✅ Checks if a document exists that matches the condition.

```js
User.exists({ name: 'Alice' }); // returns true or null
```

---

### 14. **`populate()`**

> 🔗 Fills in referenced documents (like JOIN in SQL).

```js
Post.find().populate('author'); // if author is a ref to User model
```

--- 