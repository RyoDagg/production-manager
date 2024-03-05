const { DataTypes } = require("sequelize");
const sequelize = require("../../database");
const Product = require("../product/model");

sequelize
  .define(
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
  )
  .belongsTo(Product);
