const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

const Material = sequelize.define(
  "Material",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    image: DataTypes.TEXT,
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "*",
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Material;
