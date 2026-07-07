const express = require('express');
const router = express.Router();
const controller = require("../controllers/customerController");


router.post('/customers',controller.insertCustomer);
router.delete('/delete/:id',controller.deleteCustomer);
router.get('/getAllcustomers',controller.getAllCustomers);
router.put('/updatecustomer/:id',controller.updateCustomer);


module.exports=router;
