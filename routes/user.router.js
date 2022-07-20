const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

router.post("/", UserController.signup);
router.get("/:userId", UserController.signin);

module.exports = router;