const { Sequelize } = require("sequelize");
const { host, username, password, database, dialect } =
  require("config").database;

  
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
});

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully. ✅"))
  .catch((error) =>
    console.error("Unable to connect to the database ❌:", error)
  );

module.exports = sequelize;
