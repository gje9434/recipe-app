const express = require("express");
const router = express.Router();

router.use("/login", require("./login"));
router.use("/register", require("./register"));
router.use("/recover", require("./recover"));

module.exports = router;

