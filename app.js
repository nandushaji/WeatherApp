const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 7000;
const router = require("./routes");

app.use(express.json());

app.use("/", router);
app.listen(PORT, (response, error) => {
  if (error) {
    return console.log(error);
  }
  console.log("Running at port", PORT);
});
