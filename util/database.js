const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'guardianleaguetable',
  password: 'Sponge123!'
})

const connection = pool.promise();

const singleConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'guardianleaguetable',
  password: 'Sponge123!',
  multipleStatements: true
})

module.exports = {
  connection: connection,
  singleConnection: singleConnection
}