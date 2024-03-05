const { DataTypes } = require("sequelize");
const sequelize = require("../../database");
const Product = require("../product/model");

const Production = sequelize.define(
  "Production",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);
Production.belongsTo(Product);
Product.hasMany(Production);

module.exports = Production;
