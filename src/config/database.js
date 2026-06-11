const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "inventory_user",
  password: "inventory_password",
  database: "inventory_db",
});

module.exports = pool;
