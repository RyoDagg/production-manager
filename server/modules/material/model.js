const { DataTypes } = require("sequelize");
const sequelize = require("../../database");

module.exports = sequelize.define(
  "Material",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    image: DataTypes.TEXT,
    unit: DataTypes.STRING,
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
