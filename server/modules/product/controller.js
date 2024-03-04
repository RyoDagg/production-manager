const Product = require("./model");

const getAll = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    console.log(req.body);
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create };
