const pool = require("../config/database");

const createProduct = async (name, stock) => {
  const result = await pool.query(
    `INSERT INTO products (name, stock)
     VALUES ($1, $2)
     RETURNING id, name, stock, created_at`,
    [name, stock]
  );

  return result.rows[0];
};

const getProducts = async () => {
  const result = await pool.query(
    `SELECT id, name, stock, created_at
     FROM products
     ORDER BY id ASC`
  );

  return result.rows;
};

module.exports = {
  createProduct,
  getProducts,
};
