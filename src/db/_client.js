require("dotenv").config();
const Client = require("pg").Client;
const devConfig = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};

const prodConfig = {
  connectionString: process.env.DATABASE_URL,
};

const client = new Client(
  process.env.NODE_ENV === "production" ? prodConfig : devConfig
);

module.exports = client;
