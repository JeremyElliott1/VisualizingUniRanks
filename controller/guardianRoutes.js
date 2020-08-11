const db = require('../util/database.js')

get404Page = (req,res,next) => {

}

getGuardianTeachingScorePage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardianinstitutionranking')
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
  db.connection.query('SELECT * FROM guardianinstitutionranking')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('careerProspects.ejs', {
        pageTitle: 'TheGuardian Career Prospects',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));

};

getParallelPlotPage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardianinstitutionranking')
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