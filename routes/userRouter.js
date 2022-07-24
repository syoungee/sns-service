const express = require("express");
const router = express.Router();
const UserController = require("../controllers/userController");
const LoginController = require("../controllers/loginController");

// 회원 가입 요청
router.post("/", UserController.signup);
// 로그인
router.get("/login", LoginController.signin);
// TODO: 로그아웃

module.exports = router;
