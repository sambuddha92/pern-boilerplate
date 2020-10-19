require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PGDB_NAME, process.env.PGDB_USER, process.env.PGDB_PASSWORD, {
    host: process.env.PGDB_HOST,
    port: process.env.PGDB_PORT,
    dialect: 'postgres'
  });

  module.exports = sequelize;