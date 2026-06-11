const pool = require("../config/database");
const redisClient = require("../config/redis");

const PRODUCTS_CACHE_KEY = "products";

const createProduct = async (name, stock) => {
  const result = await pool.query(
    `INSERT INTO products (name, stock)
     VALUES ($1, $2)
     RETURNING id, name, stock, created_at`,
    [name, stock]
  );

  await redisClient.del(PRODUCTS_CACHE_KEY);

  return result.rows[0];
};

const getProducts = async () => {
  const cachedProducts = await redisClient.get(PRODUCTS_CACHE_KEY);

  if (cachedProducts) {
    console.log("Redis cache hit");
    return JSON.parse(cachedProducts);
  }

  console.log("Redis cache miss");

  const result = await pool.query(
    `SELECT id, name, stock, created_at
     FROM products
     ORDER BY id ASC`
  );

  await redisClient.setEx(
    PRODUCTS_CACHE_KEY,
    60,
    JSON.stringify(result.rows)
  );

  return result.rows;
};

module.exports = {
  createProduct,
  getProducts,
};
