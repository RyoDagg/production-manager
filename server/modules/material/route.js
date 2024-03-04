const router = require("express").Router();
const materialController = require("./controller");

router
  .route("/")
  .get(materialController.getAll)
  .post(materialController.create);

router.route("/select")
  .get(materialController.getAllSelect);

module.exports = router;
