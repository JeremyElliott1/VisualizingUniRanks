const db = require('../util/database.js')

getParallelPlotPage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianParallelPlot.ejs', {
        pageTitle: 'TheGuardian Overview',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
};

getBarChartsPage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianMetricBarCharts.ejs', {
        pageTitle: 'TheGuardian Metrics View',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
};

getComparisonPage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_subject_ranks')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('comparisonGuardian.ejs', {
        pageTitle: 'TheGuardian All Subject Ranks',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
};

getNewComparisonPage = (req, res, next) => {
  db.singleConnection.connect();
  db.singleConnection.query('SELECT * FROM guardian_subject_ranks; SELECT * FROM allranksguardiancsv', function (error, results, fields) {
    if (error) {
      throw error;
    }
    //THIS RESULTS VALUE MUST BE ASSIGNED OUTSIDE ITS CODE BLOCK
    console.log(results.length)
    console.log(results[1].length)
    let guardianData = JSON.stringify(results[0]);
    let completeUniData = JSON.stringify(results[1]);

    repsond(res, guardianData, completeUniData);
  });
};

function repsond(res, guardianData, completeUniData) {
  res.render('comparisonGuardian.ejs', {
    pageTitle: "hello",
    passedUniData: guardianData,
    completeUniData: completeUniData
  })
};

module.exports = {
  getParallelPlotPage: getParallelPlotPage,
  getBarChartsPage: getBarChartsPage,
  getComparisonPage: getComparisonPage,
  getNewComparisonPage: getNewComparisonPage
};