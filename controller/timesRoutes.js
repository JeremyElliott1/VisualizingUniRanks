//Module imports
const express = require('express');

//Local imports
const db = require('../util/database.js');

const router = express.Router();

router.get('/overview', (req, res, next) => {
  db.connection.query('SELECT * FROM SundayTimes2020Overall')
  .then(([rowData, columnData]) => {
    let universities = [];
    rowData.forEach(rowValue => {
      universities.push(rowValue);
    });
    universities = JSON.stringify(universities);
    res.render('timesParallelPlot.ejs', {
      pageTitle: 'Sunday Times Uni Rankings',
      passedUniData: universities,
    });
  })
  .catch((err) => console.log(err));
});

router.get('/byMetric', (req, res, next) => {
  db.connection.query('SELECT * FROM SundayTimes2020Overall')
  .then(([rowData, columnData]) => {
    let universities = [];
    rowData.forEach(rowValue => {
      universities.push(rowValue);
    });
    universities = JSON.stringify(universities);
    res.render('timesMetricBarCharts.ejs', {
      pageTitle: 'Sunday Times Uni Rankings',
      passedUniData: universities,
    });
  })
  .catch((err) => console.log(err));
});

module.exports = {
  router: router
};