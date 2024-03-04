const router = require("express").Router();
const productController = require("./controller");

router.route("/")
    .get(productController.getAll)
    .post(productController.create);
router.route("/mats")
    .post(productController.createWithMats);

module.exports = router;
