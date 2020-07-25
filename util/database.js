const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'guardianleaguetable',
  password: 'Sponge123!'
})

const connection = pool.promise();

module.exports = {
  connection: connection
}