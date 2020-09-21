// Module imports
const express = require('express');
const path = require('path');

// Local imports
const guardianRoutes = require('./controller/guardianRoutes.js');
const CUGroutes = require('./controller/completeUniRoutes.js');
const timesRoutes = require('./controller/timesRoutes.js');
// const comparisonRoutes = require('./controller/comparisonRoutes.js');

const app = express();

//Sets type of templating engine is used & where files are stored
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/guardian',guardianRoutes.router);
app.use('/CUG', CUGroutes.router);
app.use('/sundayTimes', timesRoutes.router);
// app.use(comparisonRoutes.router);

app.use('/', (req, res, next) => {
  res.render('home.ejs');
});

app.listen(3000);


function add(num1, num2){
  return num1 + num2;
}

module.exports = {
  add: add
};