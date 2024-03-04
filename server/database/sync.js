const db = require("./index");
const Product = require("../modules/product/model");
const Material = require("../modules/material/model");
const MaterialProduct = require("../modules/productMaterial/model");
(async () => {
  try {
    await db.sync({ force: true });
    console.log("Database was just synchronized successfully!!");
  } catch (error) {
    console.log("Database synchronization error!!", error);
  }
})();
