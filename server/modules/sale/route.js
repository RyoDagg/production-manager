const router = require("express").Router();
const saleController = require("./controller");

router
  .route("/")
  .get(saleController.getAll)
  .post(saleController.create);

module.exports = router;
