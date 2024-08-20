const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mobile_legend",
});

connection.connect(function (error) {
  if (error) throw error;
  console.log("database connected!");
});

module.exports = connection;
