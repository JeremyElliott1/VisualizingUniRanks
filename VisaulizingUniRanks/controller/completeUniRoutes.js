//Module imports
const express = require('express');

//Local imports
const db = require('../util/database.js')

const router = express.Router();

router.get('/overview', (req, res, next) => {
  db.connection.query('SELECT * FROM complete_uni_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('completeUniParallelPlot.ejs', {
        pageTitle: 'Complete Uni Guide Ranking',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
})

router.get('/byMetric', (req, res, next) => {
  db.connection.query('SELECT * FROM complete_uni_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('completeUniMetricBarCharts.ejs', {
        pageTitle: 'Complete Uni Guide Ranking',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
});

module.exports = {
  router: router,
};