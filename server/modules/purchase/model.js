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
  },
  {
    timestamps: true,
  }
);
Purchase.belongsTo(Material);
Material.hasMany(Purchase);

module.exports = Purchase;
