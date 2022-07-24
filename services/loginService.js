const mysqlPool = require("../db/mysqlConfig");
const { createToken } = require("../middlewares/jwt/createToken");

class LoginService {
  static async login(email, password) {
    const sql = `select user_id, email, user_name from user where email='${email}' and password='${password}';`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      const [[result]] = await connection.query(sql, [email, password]);
      console.log("userInfo?", { ...result, userToken: createToken(email) });
      return { ...result, userToken: createToken(email) };
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
}

module.exports = LoginService;
