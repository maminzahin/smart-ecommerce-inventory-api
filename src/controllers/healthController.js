const pool = require("../config/database");
const redisClient = require("../config/redis");

const healthCheck = async (req, res) => {
  const dbResult = await pool.query("SELECT NOW()");

await redisClient.set("health", "ok");

const redisStatus =
  await redisClient.get("health");

  res.json({
    message: "API is running",
    databaseTime: dbResult.rows[0].now,
    redisStatus,
  });
};

module.exports = {
  healthCheck,
};
