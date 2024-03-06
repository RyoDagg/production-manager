const path = require("path");

const Material = require("./model");

const getAll = async (req, res) => {
  try {
    const materials = await Material.findAll();
    res.json(materials);
  } catch (error) {
    res.status(404).send(error);
  }
};

// the purpose of this is get get only the necessary fields to be used in select input
const getAllSelect = async (req, res) => {
  try {
    const materials = await Material.findAll({
      attributes: ["id", "name", "unit"],
    });
    res.json(materials);
  } catch (error) {
    res.status(404).send(error);
  }
};

const create = async (req, res) => {
  try {
    const { image } = req.files;
    const [, extension] = req.files.image.mimetype.split("/");

    const imagePath = path.join(__dirname, "../../storage/images/materials/");
    const imageName = Date.now() + "." + extension;

    await image.mv(imagePath + imageName);
    const imageUrl = `${req.protocol}://${req.get("host")}`;
    const data = {
      ...req.body,
      image: imageUrl + "/storage/images/materials/" + imageName,
    };

    const material = await Material.create(data);
    res.status(201).json(material);
  } catch (error) {
    res.status(409).send(error);
  }
};

module.exports = { getAll, create, getAllSelect };
