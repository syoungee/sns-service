const express = require("express");
const router = express.Router();
const LoginController = require("../controllers/loginController");

// 로그인
router.get("/", LoginController.signin);
// TODO: 로그아웃

module.exports = router;
