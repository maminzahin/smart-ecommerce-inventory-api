const productService = require("../services/productService");

const createProduct = async (req, res) => {
  const { name, stock } = req.body;

  const product = await productService.createProduct(name, stock);

  res.status(201).json(product);
};

const getProducts = async (req, res) => {
  const products = await productService.getProducts();

  res.json({
    data: products,
  });
};

module.exports = {
  createProduct,
  getProducts,
};
