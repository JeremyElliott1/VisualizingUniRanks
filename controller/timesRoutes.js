const db = require('../util/database.js');

getParallelPlotPage = (req, res, next) => {
  db.connection.query('SELECT * FROM times_overall')
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
};

getBarChartsPage = (req, res, next) => {
  db.connection.query('SELECT * FROM times_overall')
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
};

module.exports = {
  getParallelPlotPage: getParallelPlotPage,
  getBarChartsPage: getBarChartsPage
};