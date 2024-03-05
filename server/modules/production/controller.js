const Production = require("./model");
const Product = require("../product/model");

const getAll = async (req, res) => {
  try {
    const productions = await Production.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
    res.json(productions);
  } catch (error) {
    res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    console.log(req.body);
    const production = await Production.create(req.body);
    res.status(201).json(production);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create };
