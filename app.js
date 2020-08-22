// Module imports
const express = require('express');
const path = require('path');

// Local imports
const guardianRoutes = require('./controller/guardianRoutes.js');
const completeUniRoutes = require('./controller/completeUniRoutes.js');
const timesRoutes = require('./controller/timesRoutes.js');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/timesPCP', timesRoutes.getParallelPlotPage);
app.use('/guardianBar', guardianRoutes.getBarChartsPage);
app.use('/guardianPCP', guardianRoutes.getParallelPlotPage);
app.use('/completeUniBar', completeUniRoutes.getBarChartsPage);
app.use('/completeUniPCP', completeUniRoutes.getParallelPlotPage);
app.use('/', (req, res, next) => {
  res.render('home.ejs');
});



app.listen(3000);
