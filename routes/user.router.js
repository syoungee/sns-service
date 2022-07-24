const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

// 회원 가입 요청
router.post("/", UserController.signup);

module.exports = router;
