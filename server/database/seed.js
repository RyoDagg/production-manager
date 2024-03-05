// import sequelize connection
const db = require("./index");
const Product = require("../modules/product/model");

// import sequelize models
const Material = require("../modules/material/model");
const ProductMaterial = require("../modules/productMaterial/model");
const Production = require("../modules/production/model");

// import json dummyData
const materials = require("../data/materials.json");
const products = require("../data/products.json");
const productions = require("../data/productions.json");

// seed Materials
(async () => {
  try {
    await Material.destroy({ truncate: { cascade: true } });
    await Material.bulkCreate(materials);
    console.log("Materials seeded successfully!!");
  } catch (error) {
    console.log("Materials seeding Error!!", error);
  }
})();

// seed Products with respective join materials
(async () => {
  try {
    await Product.destroy({ truncate: { cascade: true } });
    const createdProducts = await Product.bulkCreate(products);
    products.forEach(({ materials }, i) => {
      materials.forEach(({ id, quantity }) => {
        ProductMaterial.create({
          ProductId: createdProducts[i].id,
          MaterialId: id,
          quantity,
        });
      });
    });
    console.log("Products seeded successfully!!");
  } catch (error) {
    console.log("Products seeding Error!!", error);
  }
})();

// seed Productions
(async () => {
  try {
    await Production.destroy({ truncate: { cascade: true } });
    await Production.bulkCreate(productions);
    console.log("Productions seeded successfully!!");
  } catch (error) {
    console.log("Productions seeding Error!!", error);
  }
})();
