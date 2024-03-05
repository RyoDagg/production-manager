const Material = require("../material/model");
const Purchase = require("./model");

const getAll = async (req, res) => {
  try {
    const purchases = await Purchase.findAll({
      include: { model: Material },
    });
    res.json(purchases);
  } catch (error) {
    res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const purchase = await Purchase.create(req.body);

    // todo: Update purchased material stock
    const material = await purchase.getMaterial();
    material.stock += +purchase.quantity;
    material.save();

    res.status(201).json(purchase);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create };
