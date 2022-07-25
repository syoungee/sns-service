const PostService = require("../services/postService.js");

class PostController {
  static async timestamp() {
    var today = new Date();
    today.setHours(today.getHours() + 9);
    return today.toISOString().replace("T", " ").substring(0, 19);
  }
  static async createPost(req, res) {
    console.log("createPost 함수 호출", req.body);
    // req.body: user_id, article, main_text, updated_at
    const now_time = await PostController.timestamp();
    console.log(now_time);
    const data = { ...req.body, updated_at: now_time };
    console.log("전송하는 데이터?", data);
    try {
      await PostService.newPost(data);
      res.status(201).send({ message: "게시글이 작성되었습니다!" });
    } catch (err) {
      console.log("createPost 함수 에러");
      console.log(err);
    }
  }
}

module.exports = PostController;
