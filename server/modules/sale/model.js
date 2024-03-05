const { DataTypes } = require("sequelize");
const sequelize = require("../../database");
const Product = require("../product/model");

const Sale = sequelize.define(
  "Sale",
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    unitPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    client: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);
Sale.belongsTo(Product, {
  foreignKey: { allowNull: false },
  onDelete: "cascade",
});
Product.hasMany(Sale);

module.exports = Sale;
