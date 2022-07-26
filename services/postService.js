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
  static async getAllPost() {
    const sql = `select * from posting`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      const [result] = await connection.query(sql);
      console.log("getAllPost 함수?", result);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
  static async getUnDeletedPost() {
    const sql = `select * from posting where deleted=0`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      const [result] = await connection.query(sql);
      console.log("getAllPost 함수?", result);
      return result;
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
  static async removePost(post_id) {
    const sql = `update posting set deleted=1 where post_id=?`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      await connection.query(sql, [post_id]);
      console.log("removePost 함수 실행!");
      return;
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
  static async restorePost(post_id) {
    const sql = `update posting set deleted=0 where post_id=?`;
    let connection = null;
    try {
      connection = await mysqlPool.getConnection(async (conn) => conn);
      await connection.query(sql, [post_id]);
      console.log("restorePost 함수 실행!");
      return;
    } catch (err) {
      console.log(err);
    } finally {
      if (connection) connection.release();
    }
  }
}

module.exports = PostService;
