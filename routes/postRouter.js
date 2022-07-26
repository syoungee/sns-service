const express = require("express");
const PostController = require("../controllers/postController");
const { auth } = require("../middlewares/auth");
const router = express.Router();

//router.use(auth);

// 게시글 생성
router.post("/", PostController.createPost);
//게시글 일부 or 모두 가져오기
router.get("/", PostController.readPost);
// 게시글 삭제
router.post("/delete", PostController.deletePost);
// 게시글 복구
router.post("/restore", PostController.restorePost);

module.exports = router;
