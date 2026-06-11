const express = require("express");

const routes = require("./routes");

const redisClient = require("./config/redis");

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(routes);

const startServer = async () => {
  await redisClient.connect();

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer();
