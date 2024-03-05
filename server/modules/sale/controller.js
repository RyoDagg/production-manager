const Sale = require("./model");
const Product = require("../product/model");


const getAll = async (req, res) => {
  try {
    const sales = await Sale.findAll({
      include: { model: Product },
    });
    res.json(sales);
  } catch (error) {
    res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const sale = await Sale.create(req.body);

    // todo: Update sold Product stock
    const product = await sale.getProduct();
    product.stock -= +sale.quantity;
    product.save();

    res.status(201).json(sale);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create };
