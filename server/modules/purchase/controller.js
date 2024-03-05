const Purchase = require("./model");

const getAll = async (req, res) => {
  try {
    const purchases = await Purchase.findAll();
    res.json(purchases);
  } catch (error) {
    res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const purchase = await Purchase.create(req.body);

    res.status(201).json(purchase);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create };
