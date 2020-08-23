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

module.exports = {
  getParallelPlotPage: getParallelPlotPage,
  getBarChartsPage: getBarChartsPage,
  getComparisonPage: getComparisonPage
};