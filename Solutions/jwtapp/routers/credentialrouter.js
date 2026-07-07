const express =require('express');
const router =express.Router();
const credentialController = require("../controllers/credentialController");

router.post('/credentials',credentialController.addCredential);
router.delete('/deletecredential/:id',credentialController.deleteCredential);
router.get('/getAllcredentials',credentialController.getAllCredentials);
router.put('/updatecredential/:id',credentialController.updateCredential);

module.exports=router;
 
