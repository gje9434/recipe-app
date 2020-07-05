const express = require("express");
const router = express.Router();

router.use("/add-category", require("./add-category"));
router.use("/add-recipe", require("./add-recipe"));
router.use("/delete-recipe", require("./delete-recipe"));

module.exports = router;