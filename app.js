// Module imports
const express = require('express');

// Local imports
const homeRoute = require('./controller/home.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use('/careerprospects', homeRoute.getCareerProspectsPage)
app.use('/', homeRoute.getHomePage)


app.listen(3000);
