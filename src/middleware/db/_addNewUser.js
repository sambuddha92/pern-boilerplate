const {pool} = require("../../db");

module.exports = async (login_id, hashed_password, first_name, last_name) => {
  try {
    const newUserAdd = await pool.query(
      `INSERT INTO app_user (login_id, hashed_password, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING *`,
      [login_id, hashed_password, first_name, last_name]
    );

    return newUserAdd.rows[0];
  } catch (error) {
    throw error;
  }
};
