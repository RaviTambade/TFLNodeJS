const express = require('express');
const bodyParser = require('body-parser');
 


const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; // Replace with a strong random string in production

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const session = require('express-session');
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));



const logMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
  };
  
app.use(logMiddleware);


const authMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  };
  

  const errorHandlerMiddleware = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  };
  
  app.use(errorHandlerMiddleware);

  


  app.get('/profile', authMiddleware, (req, res) => {
    res.render('profile');
  });

  
   
// Example protected endpoint
app.get('/api/hello', authenticateToken, (req, res) => {

  res.json({ id:12, username: "Ravi Tambade" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
