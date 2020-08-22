const db = require('../util/database.js')

getParallelPlotPage = (req, res, next) => {
  db.connection.query('SELECT * FROM complete_university_guide_overall')
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
};

getBarChartsPage = (req, res, next) => {
  db.connection.query('SELECT * FROM complete_university_guide_overall')
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
};

module.exports = {
  getParallelPlotPage: getParallelPlotPage,
  getBarChartsPage: getBarChartsPage
};