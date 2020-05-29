const mysql = require("mysql2");

module.exports = mysql.createConnection(process.env.LOCAL_DB_URL || process.env.JAWSDB_URL);
