const db = require('../util/database.js')

getCompleteUniOverallScorePage = (req, res, next) => {
  db.connection.query('SELECT * FROM complete_university_guide_overall')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('completeUniParallelPlot.ejs', {
        pageTitle: 'Complete University Guide',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getCompleteUniOverallScorePage: getCompleteUniOverallScorePage
};