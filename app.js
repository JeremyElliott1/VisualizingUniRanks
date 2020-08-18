// Module imports
const express = require('express');
const path = require('path');

// Local imports
const guardianRoutes = require('./controller/guardianRoutes.js');
const completeUniRoutes = require('./controller/completeUniRoutes.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/drag', guardianRoutes.getGuardianDragPage);
app.use('/careerprospects', guardianRoutes.getCareerProspectsPage);
app.use('/parallelCoordinatesPlot', guardianRoutes.getParallelPlotPage);
app.use('/teachingScore', guardianRoutes.getGuardianTeachingScorePage);
app.use('/overall', completeUniRoutes.getCompleteUniOverallScorePage);
app.use('/', (req, res, next) => {
  res.render('home.ejs');
});



app.listen(3000);
