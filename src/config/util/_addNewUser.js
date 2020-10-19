const { pool } = require("../db");
module.exports = async (
  first_name,
  middle_name,
  last_name,
  login_id,
  hashed_password,
  bio
) => {
  try {
    const newUserAdd = await pool.query(
      `INSERT INTO app_user (first_name, middle_name, last_name, login_id, hashed_password, bio) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [first_name, middle_name, last_name, login_id, hashed_password, bio]
    );

    return newUserAdd.rows[0];
  } catch (error) {
    throw error;
  }
};
