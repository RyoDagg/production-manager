const path = require("path");

const Product = require("./model");
const ProductMaterial = require("../productMaterial/model");
const Material = require("../material/model");

const getAll = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [
        {
          model: Material,
          attributes: ["name", "unit"],
          through: { attributes: ["quantity"], as: "pivot" },
        },
      ],
    });
    res.json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

const getOne = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id, {
      include: [
        {
          model: Material,
          attributes: ["name", "unit", "stock"],
          through: { attributes: ["quantity"], as: "pivot" },
        },
      ],
    });
    res.json(product);
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
    // Umage saving logic
    const { image } = req.files;
    const [, extension] = req.files.image.mimetype.split("/");

    const imagePath = path.join(__dirname, "../../storage/images/products/");
    const imageName = Date.now() + "." + extension;

    await image.mv(imagePath + imageName);
    const imageUrl = `${req.protocol}://${req.get("host")}`;
    const data = {
      ...req.body,
      image: imageUrl + "/storage/images/products/" + imageName,
    };

    let { materials } = data;
    materials = JSON.parse(materials);
    console.log(materials);

    const product = await Product.create(data);
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

const getNames = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "stock"],
    });
    res.json(products);
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = {
  getAll,
  create,
  createWithMats,
  getNames,
  getOne,
};
