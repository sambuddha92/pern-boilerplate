const { pool } = require("../db");
module.exports = async (primary_id) => {
  try {
    const queryResult = await pool.query(
      `SELECT * FROM app_user WHERE app_user_key = $1 LIMIT 1 `,
      [primary_id]
    );
    return queryResult.rows.length > 0 ? queryResult.rows[0] : null;
  } catch (error) {
    throw error;
  }
};
