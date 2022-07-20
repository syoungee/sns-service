const res = require("express/lib/response");
// const mysqlPool = require("../db/mysqlConfig");

class UserService {
  static async createUser() {
    // const sql = `INSERT INTO user values ();`;
    //let connection = null;
    try {
      // connection = await mysqlPool.getConnection(async (conn) => conn);
      // const [result] = await connection.query(sql);
      // return result;
    } catch (err) {
      console.log(err);
    } finally {
      //connection.release();
    }
  }
}

module.exports = UserService;