const express = require("express");

const router = express.Router();

const {
  healthCheck,
} = require("../controllers/healthController");

const { 
  createProduct,
  getProducts,
} = require("../controllers/productController");

router.get("/", healthCheck);
router.get("/api/products", getProducts);

router.post("/test", (req,res) => {
 res.json({
  received: req.body,
  });
});

router.post("/api/products", createProduct);

module.exports = router;
