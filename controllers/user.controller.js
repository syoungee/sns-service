const UserService = require("../services/user.service.js");

class UserController {
  static async signup(req, res) {
    const {email, password, user_name} = req.body();
    try {
      await UserService.createUser(email, password, user_name);
      res.status(201).send({ message: "아이디가 생성되었습니다!" });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = UserController;
