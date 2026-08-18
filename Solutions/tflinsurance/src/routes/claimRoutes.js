const express = require("express");
const claimController = require("../controllers/claimController");

const router = express.Router();

router.post("/", claimController.createClaim);
router.post("/:id/settle", claimController.settleClaim);

module.exports = router;
