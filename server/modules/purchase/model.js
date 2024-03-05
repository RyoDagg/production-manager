const { DataTypes } = require("sequelize");
const sequelize = require("../../database");
const Material = require("../material/model");

const Purchase = sequelize.define(
  "Purchase",
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
Purchase.belongsTo(Material);
Material.hasMany(Purchase);

module.exports = Purchase;
