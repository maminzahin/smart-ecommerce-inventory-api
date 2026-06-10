const products = [];

const createProduct = (req, res) => {
  const { name, stock } = req.body;

  const product = {
    id: products.length + 1,
    name,
    stock,
  };

  products.push(product);

  res.status(201).json(product);
};

const getProducts = (req, res) => {
  res.json({
    data: products,
  });
};

module.exports = {
  createProduct,
  getProducts,
};
