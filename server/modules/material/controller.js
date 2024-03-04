const Material = require("./model");

const getAll = async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.json(materials);
  } catch (error) {
    res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    console.log(req.body);
    const material = await Material.create(req.body);
    res.status(201).json(material);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create };
