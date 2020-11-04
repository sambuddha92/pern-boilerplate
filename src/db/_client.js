require("dotenv").config();
const Client = require("pg").Client;
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

const client = new Client(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

module.exports = client;
