const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const UserController = require("../controllers/userController");

// 회원 가입 요청
router.post("/", UserController.signup);
// 사용자 권한 부여(토큰 확인)
router.use(auth);
router.get("/", UserController.findAll);

module.exports = router;
