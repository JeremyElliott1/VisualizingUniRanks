const db = require('../util/database.js')

getHomePage = (req, res, next) => {
  db.connection.query('SELECT * FROM guardianinstitutionranking')
    .then(([rowData, columnData]) => {
      let universities = [];
      rowData.forEach(rowValue => {
        universities.push(rowValue);
      });
      universities = JSON.stringify(universities);
      res.render('home.ejs', {
        pageTitle: 'Homepage',
        passedUniData: universities,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getHomePage: getHomePage
};