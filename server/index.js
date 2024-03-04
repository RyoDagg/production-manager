const express = require("express");
const db = require("./database");
const { server } = require("config");
const productRouter = require("./modules/product/route");

const app = express();

app.use(express.json());
app.use("/api/product", productRouter);

app.listen(server.PORT, () => {
  console.log(`App served on port ${server.PORT}`);
});
