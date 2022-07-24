const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

// 회원 가입 요청
router.post("/", UserController.signup);
// 로그인
router.get("/login", UserController.signin);
// TODO: 로그아웃

module.exports = router;
