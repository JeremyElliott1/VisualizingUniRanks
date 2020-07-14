// Module imports
const express = require('express');

// Local imports
const homeRoute = require('./controller/home.js');
const db = require('./util/database.js')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

db.connection.query('SELECT universityName FROM leaguetableranking')
  .then(([rowData, columnData]) => {
    let array = [];
    rowData.forEach(rowValue => {
      array.push(rowValue.universityName);
    });
    console.log(array);

  })
  .catch((err) => console.log(err));

app.use('/', homeRoute.getHomePage)

app.listen(3000);
