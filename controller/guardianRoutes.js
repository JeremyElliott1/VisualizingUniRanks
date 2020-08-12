const db = require('../util/database.js')

get404Page = (req,res,next) => {

}

getGuardianTeachingScorePage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianTeachingScore.ejs', {
        pageTitle: 'TheGuardian Teaching Scores',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
};

getCareerProspectsPage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('guardianCareerProspects.ejs', {
        pageTitle: 'The Guardian Career Prospects',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));

};

getParallelPlotPage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardian_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('parallelPlot.ejs', {
        pageTitle: 'Parallel Plot',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));

};

module.exports = {
  getGuardianTeachingScorePage: getGuardianTeachingScorePage,
  getCareerProspectsPage: getCareerProspectsPage,
  getParallelPlotPage: getParallelPlotPage
};