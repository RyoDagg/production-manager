const db = require("./index");
const Product = require("../modules/product/model");
const Material = require("../modules/material/model");
// const MaterialProduct = require("../modules/productMaterial/model");
const materials = require("../data/materials.json");
const products = require("../data/products.json");

(async () => {
  try {
    await Material.destroy({ truncate: { cascade: true } });
    await Material.bulkCreate(materials);
    console.log("Materials seeded successfully!!");
  } catch (error) {
    console.log("Materials seeding Error!!", error);
  }
})();

(async () => {
  try {
    await Product.destroy({ truncate: { cascade: true } });
    await Product.bulkCreate(products);
    console.log("Products seeded successfully!!");
  } catch (error) {
    console.log("Products seeding Error!!", error);
  }
})();
