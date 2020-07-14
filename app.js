//Module imports
const express = require('express');

//Local imports
const homeRoute = require('./controller/home');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', homeRoute.getHomePage )

app.listen(3000);