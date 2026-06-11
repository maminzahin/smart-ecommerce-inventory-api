const products = [];

const createProduct = (name, stock) => {
  const product = {
    id: products.length + 1,
    name,
    stock,
  };

  products.push(product);

  return product;
};

const getProducts = () => {
  return products;
};

module.exports = {
  createProduct,
  getProducts,
};
