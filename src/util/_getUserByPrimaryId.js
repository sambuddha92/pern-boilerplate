const { pool } = require("../db");
module.exports = async (id) => {
  try {
    const queryResult = await pool.query(
      `SELECT * FROM app_user WHERE id = $1 LIMIT 1 `,
      [id]
    );
    return queryResult.rows.length > 0 ? queryResult.rows[0] : null;
  } catch (error) {
    throw error;
  }
};
