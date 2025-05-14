const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the login.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'login.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
