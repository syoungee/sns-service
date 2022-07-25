const express = require("express");
const PostController = require("../controllers/postController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

//router.use(auth);

// 게시글 생성
router.post("/", PostController.createPost);

//TODO: 게시글 일부 or 모두 가져오기

module.exports = router;
