const Product = require("./model");

const getAll = async (req, res) => {
  try {
    const products = Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = { getAll };
