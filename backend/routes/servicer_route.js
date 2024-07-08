const express = require("express");
const router = express.Router();
const { getServicer } = require("../controllers/servicer_controller.js");

// Define your routes
router.get("/", getServicer);

module.exports = router;
