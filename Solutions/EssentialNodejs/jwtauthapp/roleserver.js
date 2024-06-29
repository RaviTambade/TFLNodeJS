/*
Implementing JWT authentication with claims involves adding custom information 
(claims) to the JWT payload, which can be verified on the server side to grant or
restrict access based on specific user attributes or roles
*/

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
    { id: 1, username: 'ravit', password: 'password', role: 'user' },
    { id: 2, username: 'sameer', password: 'password', role: 'admin' }
];

// Endpoint to generate a JWT token
app.post('/api/login', (req, res) => {
  // Mock user authentication (replace with a real authentication logic)
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate a JWT token with custom claims (role)
    const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
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

    // Check if user role allows access
    if (user.role === 'admin') {
      // Example: Admins can access all endpoints
      next();
    } else {
      // Example: Users with 'user' role can only access specific endpoints
      res.status(403).json({ message: 'Forbidden' });
    }
  });
}

// Example protected endpoint
app.get('/api/userinfo', authenticateToken, (req, res) => {

    // Only allow access if user is authenticated and has 'user' role
  if (req.user.role === 'user') {
    res.json({ id: req.user.id, username: req.user.username });
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
