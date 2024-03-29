const router = require("express").Router();
const productController = require("./controller");

router.route("/").get(productController.getAll).post(productController.create);

router.post("/materials", productController.createWithMats);
router.get("/select", productController.getNames);
router.get("/:id", productController.getOne);

module.exports = router;
