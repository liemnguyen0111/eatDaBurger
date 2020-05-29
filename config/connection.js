const mysql = require("mysql2");

module.exports = mysql.createConnection(
  "mysql://root:Summer09!2MSQL@localhost:3306/burgers_db"
);
