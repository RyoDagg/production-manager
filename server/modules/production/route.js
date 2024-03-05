const router = require("express").Router();
const productionController = require("./controller");

router
  .route("/")
  .get(productionController.getAll)
  .post(productionController.create);

module.exports = router;
