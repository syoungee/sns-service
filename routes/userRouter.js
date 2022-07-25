const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");

// 회원 가입 요청
router.post("/", UserController.signup);

module.exports = router;
