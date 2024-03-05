const router = require("express").Router();
const purchaseController = require("./controller");

router
  .route("/")
  .get(purchaseController.getAll)
  .post(purchaseController.create);

module.exports = router;
