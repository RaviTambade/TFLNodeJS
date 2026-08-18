const express = require("express");
const policyController = require("../controllers/policyController");

const router = express.Router();

router.get("/", policyController.getAllPolicies);
router.get("/:id", policyController.getPolicyById);
router.post("/purchase", policyController.purchasePolicy);

module.exports = router;
