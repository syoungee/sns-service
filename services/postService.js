const mysqlPool = require("../db/mysqlConfig");

class PostService {
  static async newPost({ user_id, article, main_text, updated_at }) {
    const sql = `insert into posting (user_id, article, main_text, updated_at) values (?, ?, ?, ?);`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      const [result] = await connection.query(sql, [user_id, article, main_text, updated_at]);
      console.log("newPost 함수?", result);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
}

module.exports = PostService;
