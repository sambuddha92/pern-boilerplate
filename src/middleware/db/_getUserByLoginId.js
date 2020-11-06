const {pool} = require("../../db");

module.exports = async (login_id) => {
  try {
    const queryResult = await pool.query(
      `SELECT * FROM app_user WHERE login_id = $1 LIMIT 1 `,
      [login_id]
    );
    return queryResult.rows.length > 0 ? queryResult.rows[0] : null;
  } catch (error) {
    throw error;
  }
};
