const express = require("express");

const router = express.Router();

const {
  healthCheck,
} = require("../controllers/healthController");

router.get("/", healthCheck);

router.post("/test", (req,res) => {
 res.json({
  received: req.body,
  });
});

module.exports = router;
