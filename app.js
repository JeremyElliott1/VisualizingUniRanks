// Module imports
const express = require('express');
const path = require('path');

// Local imports
const guardianRoutes = require('./controller/guardianRoutes.js');
const CUGroutes = require('./controller/completeUniRoutes.js');
const timesRoutes = require('./controller/timesRoutes.js');
const { createVerify } = require('crypto');
const comparisonRoutes = require('./controller/comparisonRoutes.js');

const app = express();

//Sets type of templating engine is used & where files are stored
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/guardian',guardianRoutes.router);
app.use('/CUG', CUGroutes.router);
app.use('/sundayTimes', timesRoutes.router);
app.use(comparisonRoutes.router);

app.use('/uniRankHome', (req, res, next) => {
  res.render('uniRankHome.ejs');
});

app.get('/downloadCV', async function(req, res, next){
  const cvFile = path.join(__dirname,'public', 'res', 'CV.pdf');
  res.download(cvFile);
});

app.use('/', (req, res, next) => {
  res.render('index.ejs');
});

app.listen(8080);


function add(num1, num2){
  return num1 + num2;
}

module.exports = {
  add: add
};