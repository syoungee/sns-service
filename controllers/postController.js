const PostService = require("../services/postService.js");

class PostController {
  static async timestamp() {
    var today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace("T", " ").substring(0, 19);
  }
  static async createPost(req, res) {
    // req.body: user_id, article, main_text, updated_at
    const now_time = await PostController.timestamp();
    const data = { ...req.body, updated_at: now_time };
    try {
      await PostService.newPost(data);
      res.status(201).send({ message: "게시글이 작성되었습니다!" });
    } catch (err) {
      console.log(err);
    }
  }
  static async readPost(req, res) {
    try {
      const result = await PostService.getUnDeletedPost();
      console.log(result); // type array
      res.status(201).send({ result, message: "게시글이 모두 조회되었습니다!" });
    } catch (err) {
      console.log("readPost 함수 에러");
      console.log(err);
    }
  }
  static async deletePost(req, res) {
    const post_id = req.body.post_id;
    try {
      await PostService.removePost(post_id);
      res.status(201).send({ message: "게시글이 삭제되었습니다!" });
    } catch (err) {
      console.log(err);
    }
  }
  static async restorePost(req, res) {
    console.log("restorePost 함수 호출");
    const post_id = req.body.post_id;
    try {
      await PostService.restorePost(post_id);
      res.status(201).send({ message: "게시글이 복구되었습니다!" });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = PostController;
