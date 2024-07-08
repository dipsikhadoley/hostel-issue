const express = require("express");
const router = express.Router();
const issue = require("../controllers/issue_controller");

router.post("/issue", issue);

module.exports = router;
