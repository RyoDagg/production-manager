const router = require("express").Router();
const productController = require("./controller");

router.route("/").get(productController.getAll);

module.exports = router;
