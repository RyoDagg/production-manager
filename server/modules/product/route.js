const router = require("express").Router();
const productController = require("./controller");

router.route("/")
    .get(productController.getAll)
    .post(productController.create);

    router.route("/materials")
    .post(productController.createWithMats);

module.exports = router;
