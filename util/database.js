const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'guardianleaguetable',
//   password: 'Manado1969'
// })

// const connection = pool.promise();

// const singleConnection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'guardianleaguetable',
//   password: 'Manado1969',
//   multipleStatements: true,
//   debug: false
// })

const pool = mysql.createPool({
  host: 'aws-uni-ranking-db.ceufuz7l3osw.us-east-2.rds.amazonaws.com',
  user: 'admin',
  database: 'new_schema',
  password: 'Manado1969'
})

const connection = pool.promise();

const singleConnection = mysql.createConnection({
  host: 'aws-uni-ranking-db.ceufuz7l3osw.us-east-2.rds.amazonaws.com',
  user: 'admin',
  database: 'new_schema',
  password: 'Manado1969',
  multipleStatements: true,
  debug: false
})

module.exports = {
  connection: connection,
  singleConnection: singleConnection
}