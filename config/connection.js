const mysql = require("mysql2");
require('dotenv').config()

module.exports = mysql.createConnection(process.env.LOCAL_DB_URL || process.env.JAWSDB_URL);
