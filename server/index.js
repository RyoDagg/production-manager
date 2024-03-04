const express = require("express");
const cors = require("cors");
const db = require("./database");
const { server } = require("config");
const productRouter = require("./modules/product/route");
const materialRouter = require("./modules/material/route");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/material", materialRouter);

app.listen(server.PORT, () => {
  console.log(`App served on port ${server.PORT}`);
});
