const express = require('express');
const { add } = require('./calculator');

const app = express();
app.use(express.json());

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = add(Number(a), Number(b));
  res.json({ result });
});

module.exports = app;
