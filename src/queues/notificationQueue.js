const { Queue } = require("bullmq");

const notificationQueue = new Queue(
  "stock-notification",
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);

module.exports = notificationQueue;
