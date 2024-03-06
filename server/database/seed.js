// import sequelize models
const Product = require("../modules/product/model");
const Material = require("../modules/material/model");
const ProductMaterial = require("../modules/productMaterial/model");
const Production = require("../modules/production/model");
const Sale = require("../modules/sale/model");
const Purchase = require("../modules/purchase/model");

// import json dummyData
const materials = require("../data/materials.json");
const products = require("../data/products.json");
const productions = require("../data/productions.json");
const sales = require("../data/sales.json");
const purchases = require("../data/purchases.json");

// seed Materials
(async () => {
  await (async () => {
    try {
      await Material.bulkCreate(materials);
      console.log("Materials seeded successfully!!");
    } catch (error) {
      console.log("Materials seeding Error!!", error);
    }
  })();

  // seed Products with respective join materials
  await (async () => {
    try {
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
  await (async () => {
    try {
      await Production.bulkCreate(productions);
      console.log("Productions seeded successfully!!");
    } catch (error) {
      console.log("Productions seeding Error!!", error);
    }
  })();

  // seed Sales
  await (async () => {
    try {
      await Sale.bulkCreate(sales);
      console.log("Sales seeded successfully!!");
    } catch (error) {
      console.log("Sales seeding Error!!", error);
    }
  })();

  // seed Purchases
  await (async () => {
    try {
      await Purchase.bulkCreate(purchases);
      console.log("Purchases seeded successfully!!");
    } catch (error) {
      console.log("Purchases seeding Error!!", error);
    }
  })();
})();
