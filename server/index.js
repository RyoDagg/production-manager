const express = require("express");
const { server } = require("config");

const app = express();

app.listen(server.PORT, () => {
  console.log(`App served on port ${server.PORT}`);
});
