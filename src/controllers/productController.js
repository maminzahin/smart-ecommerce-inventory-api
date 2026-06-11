const productService = require("../services/productService");

const createProduct = (req, res) => {
  const { name, stock } = req.body;

  const product = productService.createProduct(
    name,
    stock
  );

  res.status(201).json(product);
};

const getProducts = (req, res) => {
  const products =
    productService.getProducts();

  res.json({
    data: products,
  });
};

module.exports = {
  createProduct,
  getProducts,
};
