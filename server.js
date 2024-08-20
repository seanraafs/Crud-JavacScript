const port = 3000;
const express = require("express");
const server = express();
const bodyParser = require("body-parser");
const heroController = require("./controller/Hero.controller");

server.use(bodyParser.urlencoded({ extended: false }));
server.set("view engine", "ejs");
server.set("views", "view");

server.use("/hero", heroController);

server.use("/", (req, res) => {
  res.send("Server berjalan!");
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
