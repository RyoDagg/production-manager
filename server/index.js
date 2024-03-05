const express = require("express");
const cors = require("cors");
const db = require("./database");
const morgan = require("morgan");
const { server } = require("config");
const productRouter = require("./modules/product/route");
const materialRouter = require("./modules/material/route");
const productionRouter = require("./modules/production/route");
const purchaseRouter = require("./modules/purchase/route");

const app = express();

app.use(morgan());
app.use(cors());
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/material", materialRouter);
app.use("/api/production", productionRouter);
app.use("/api/purchase", purchaseRouter);

app.listen(server.PORT, () => {
  console.log(`App served on port ${server.PORT}`);
});
