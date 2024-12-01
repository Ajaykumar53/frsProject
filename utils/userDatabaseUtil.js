const mysql = require('mysql2')

const pool = mysql.createPool({
  host: "localhost",
  user:"root",
  password:"#AJ1947system",
  database:"FRSproducts"
});

module.exports = pool.promise();