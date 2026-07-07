const express = require('express');
const router = express.Router();
const controller = require("../controllers/flowersController");
const verifyToken = require("../middlewares/auth");
const isAdmin = require("../middlewares/adminMiddleware");

// Admin + User
router.get('/getAllFlowers',verifyToken,controller.getAllFlowers);

// Admin only
router.post('/insertFlower',verifyToken,isAdmin,controller.insertFlower);

// Admin only
router.put('/updateFlower/:id',verifyToken,isAdmin,controller.updateFlower);

// Admin only
router.delete('/delete/:id',verifyToken,isAdmin,controller.deleteFlower);
/*
router.post('/insertFlower',controller.insertFlower);
router.delete('/delete/:id',controller.deleteFlower);
router.get('/getAllFlowers',controller.getAllFlowers);
router.put('/updateFlower/:id',controller.updateFlower);
*/

module.exports=router;

