const healthCheck  = (req,res) => {
 res.json({
  message: "API is running",
 });
};

module.exports = {
 healthCheck,
};
