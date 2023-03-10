const express = require("express");
const app = express();
const router = require("./router");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use("/", router);

app.listen(3000, () => {
  console.log("server running at port 3000");
});
