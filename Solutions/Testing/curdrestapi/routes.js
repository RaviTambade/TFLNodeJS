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

  //mysql 
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
