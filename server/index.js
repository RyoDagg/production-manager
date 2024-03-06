const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const fileupload = require("express-fileupload");
const path = require("path");

const { server } = require("config");

const productRouter = require("./modules/product/route");
const materialRouter = require("./modules/material/route");
const productionRouter = require("./modules/production/route");
const purchaseRouter = require("./modules/purchase/route");
const saleRouter = require("./modules/sale/route");

const app = express();
app.use("/storage", express.static(path.join(__dirname, "storage")));
app.use(morgan());
app.use(cors());
app.use(fileupload());

app.use(express.json());

app.use("/api/product", productRouter);
app.use("/api/material", materialRouter);
app.use("/api/production", productionRouter);
app.use("/api/purchase", purchaseRouter);
app.use("/api/sale", saleRouter);

app.listen(server.PORT, () => {
  console.log(`App served on port ${server.PORT}`);
});
