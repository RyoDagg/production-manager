const { DataTypes } = require("sequelize");
const sequelize = require("../../database");
const Product = require("../product/model");
const Material = require("../material/model");

module.exports = sequelize.define(
  "ProductMaterial",
  {
    quantity: DataTypes.DECIMAL,
  },
  {
    timestamps: false,
  }
);

Material.belongsToMany(Product, { through: "ProductMaterial" });
Product.belongsToMany(Material, { through: "ProductMaterial" });
