// Module imports
const express = require('express');
const path = require('path');

// Local imports
const homeRoute = require('./controller/home.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));


app.use('/careerprospects', homeRoute.getCareerProspectsPage)
app.use('/pp', homeRoute.getParallelPlotPage)
app.use('/', homeRoute.getHomePage)


app.listen(3000);
