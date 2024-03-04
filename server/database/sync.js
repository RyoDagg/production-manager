const db = require("./index");
const User = require("../modules/product/model");
const Material = require("../modules/material/model");

(async () => {
  try {
    await db.sync({ force: true });
    console.log("Database was just synchronized successfully!!");
  } catch (error) {
    console.log("Database synchronization error!!", error);
  }
})();
