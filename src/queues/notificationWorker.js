const { Worker } = require("bullmq");

const worker = new Worker(
  "stock-notification",
  async (job) => {
    console.log(
      "Processing notification:",
      job.data
    );

    console.log(
      `Product ${job.data.productName} is out of stock`
    );
  },
  {
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);

worker.on("completed", (job) => {
  console.log(
    `Job ${job.id} completed`
  );
});

worker.on("failed", (job, err) => {
  console.log(
    `Job ${job.id} failed`,
    err
  );
});
