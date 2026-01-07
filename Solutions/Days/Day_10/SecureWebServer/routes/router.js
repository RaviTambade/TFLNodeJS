const express = require('express');
const authenticateToken = require('../middleware/authenticate');
const authController = require('../controllers/authcontroller');
const ordersController = require('../controllers/orderscontroller');

const router = express.Router();

// Auth routes
router.post('/login', authController.login);

// Orders routes (secured)
router.get('/orders', authenticateToken, ordersController.getOrders);

module.exports = router;
