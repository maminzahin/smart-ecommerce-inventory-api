const pool = require("../config/database");

const healthCheck = async (req, res) => {
  const dbResult = await pool.query("SELECT NOW()");

  res.json({
    message: "API is running",
    databaseTime: dbResult.rows[0].now,
  });
};

module.exports = {
  healthCheck,
};
