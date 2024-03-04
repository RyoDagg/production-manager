const Product = require("./model");
const ProductMaterial = require("../productMaterial/model");
const Material = require("../material/model");

const getAll = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: Material, through: { attributes: ['quantity'] } }],
    });
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

const createWithMats = async (req, res) => {
  try {
    const { materials } = req.body;
    console.log(req.body);
    const product = await Product.create(req.body);
    materials.forEach(async ({ id, quantity }) => {
      await ProductMaterial.create({
        ProductId: product.id,
        MaterialId: id,
        quantity,
      });
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create, createWithMats };
