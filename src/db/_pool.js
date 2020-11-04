require("dotenv").config();
const Pool = require("pg").Pool;

const devConfig = {
  user: process.env.PGDB_USER,
  host: process.env.PGDB_HOST,
  database: process.env.PGDB_NAME,
  password: process.env.PGDB_PASSWORD,
  port: process.env.PGDB_PORT,
};

const prodConfig = {
  connectionString: process.env.DATABASE_URL,
};

const pool = new Pool(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

module.exports = pool;
