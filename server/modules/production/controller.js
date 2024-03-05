const { Op } = require("sequelize");
const Production = require("./model");
const Product = require("../product/model");

const getAll = async (req, res) => {
  try {
    const productions = await Production.findAll({
      where: {
        ProductId: {
          [Op.ne]: null,
        },
      },
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
    const { quantity, ProductId } = req.body;

    const production = await Production.create({ quantity, ProductId });

    //todo: Update Product Stock
    const product = await Product.findByPk(ProductId);

    product.stock += +quantity;
    product.save();

    //todo: Update Related Materials Stock
    const materials = await product.getMaterials();
    materials.forEach((mat) => {
      mat.stock -= mat.ProductMaterial.quantity * quantity;
      mat.save();
    });

    res.status(201).json(production);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create };
