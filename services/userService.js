const mysqlPool = require("../db/mysqlConfig");
const { createToken } = require("../middlewares/jwt/createToken");

class UserService {
  static async createUser(email, password, user_name) {
    const sql = `insert into user (email, password, user_name) values (?, ?, ?);`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      await connection.query(sql, [email, password, user_name]);

      return createToken(email);
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }

  static async findAll() {
    const sql = `select user_id, user_name, email from user`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      const users = await connection.query(sql);
      console.log(users[0]);
      return users[0];
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
}

module.exports = UserService;
