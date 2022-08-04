const LoginService = require("../services/loginService.js");

class LoginController {
  static async signin(req, res) {
    console.log("signin 함수 호출", req.body);
    const { email, password } = req.body;
    try {
      const userInfo = await LoginService.login(email, password);
      if (!userInfo.userToken) {
        return res.status(400).json({ message: `userToken이 존재하지 않습니다.` });
      }

      res.setHeader("Authorization", "Bearer" + userInfo.userToken);
      res.cookie("access-token", userInfo.userToken);
      res.status(201).send({ message: `안녕하세요 ${userInfo.user_name}님 로그인되었습니다!` });
    } catch (err) {
      console.log("signin 함수 에러");
      console.log(err);
    }
  }
}

module.exports = LoginController;
