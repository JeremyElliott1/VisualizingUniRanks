const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'test_schema',
  password: 'Sponge123!'
})

module.exports = pool.promise();