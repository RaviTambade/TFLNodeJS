const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; // Replace with a strong random string in production

// Middleware to parse JSON body
app.use(bodyParser.json());

// In-memory database of users (replace this with a real database in production)
const users = [
  { id: 1, username: 'ravit', password: 'password' },
  { id: 2, username: 'sameer', password: 'password' }
];

// Endpoint to generate a JWT token
app.post('/api/login', (req, res) => {
  // Mock user authentication (replace with a real authentication logic)
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate a JWT token
    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid username or password' });
  }
});

// Middleware to verify JWT token
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Forbidden' });
    }
    req.user = user;
    next();
  });
}

// Example protected endpoint
app.get('/api/userinfo', authenticateToken, (req, res) => {
  res.json({ id: req.user.id, username: req.user.username });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
