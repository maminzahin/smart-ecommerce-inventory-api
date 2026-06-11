const productService = require("../services/productService");

const createProduct = async (req, res) => {
  const { name, stock } = req.body;
  
  if (!name || typeof name !== "string") {
     return res.status(400).json({
      message: "Product name is required",
   });
}
  if (stock === undefined || typeof stock !== "number" || stock < 0) {
     return res.status(400).json({
      message: "Product stock must be a number and cannot be negative",
     });
}
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
