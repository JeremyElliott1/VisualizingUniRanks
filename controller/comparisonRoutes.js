//module imports
const express = require('express');

//local imports
const db = require('../util/database.js')

const router = express.Router();

router.get('/comparison', (req, res, next) => {
  db.singleConnection.connect();
  db.singleConnection.query('SELECT * FROM guardian_compare; SELECT * FROM complete_uni_compare', function (error, results, fields) {
    if (error) {
      throw error;
    }

    let guardianData = JSON.stringify(results[0]);
    let completeUniData = JSON.stringify(results[1]);

    repsond(res, 'comparison.ejs', 'UniComparisons', guardianData, completeUniData);
  });
})

function repsond(res, pageName, pageTitle, dataSet1, dataSet2, dataSet3) {
  res.render(pageName, {
    pageTitle: pageTitle,
    dataSet1: dataSet1,
    dataSet2: dataSet2,
    dataSet3: dataSet3
  })
};

module.exports = {
  router: router
}