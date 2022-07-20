const UserService = require("../services/user.service.js");

class UserController {
  static async signup (req, res) {
    try {
      // await UserService.createUser();
      res.status(201)
    } catch (err) {
      console.log(err);
    }
  };

  static async signin (req, res) {
    const userId = req.params.userId;
    try {
      //res.status(201).json(result);
    } catch (err) {
      console.log(err);
    }
  };
}

module.exports = UserController;