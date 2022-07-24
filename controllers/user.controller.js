const UserService = require("../services/user.service.js");

class UserController {
  static async signup(req, res) {
    console.log("signup 함수 호출", req.body);
    const { email, password, user_name } = req.body;
    try {
      await UserService.createUser(email, password, user_name);
      res.status(201).send({ message: "아이디가 생성되었습니다!" });
    } catch (err) {
      console.log("signup 함수 에러");
      console.log(err);
    }
  }

  static async signin(req, res) {
    console.log("signin 함수 호출", req.body);
    const { email, password } = req.body;
    try {
      const userInfo = await UserService.login(email, password);
      res.status(201).send({ message: `안녕하세요 ${userInfo.user_name}님 로그인되었습니다!` });
    } catch (err) {
      console.log("signin 함수 에러");
      console.log(err);
    }
  }
}

module.exports = UserController;
