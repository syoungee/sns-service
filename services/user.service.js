const mysqlPool = require("../db/mysqlConfig");

class UserService {
  static async createUser(email, password, user_name) {
    const sql = `insert into user (email, password, user_name) values (?, ?, ?);`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      const [result] = await connection.query(sql, [email, password, user_name]);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
  static async login(email, password) {
    const sql = `select user_id, email, user_name from user where email='${email}' and password='${password}';`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      const [[result]] = await connection.query(sql, [email, password]);
      console.log("login함수 result?", result);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
}

module.exports = UserService;
