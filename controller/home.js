const db = require('../util/database.js')

getHomePage = (req, res, next) => {
  db.connection.query('SELECT NameOfProvider FROM guardianinstitutionranking')
    .then(([rowData, columnData]) => {
      let namesArray = [];
      rowData.forEach(rowValue => {
        namesArray.push(rowValue.NameOfProvider);
      });
      namesArray = JSON.stringify(namesArray);
      res.render('home.ejs', {
        pageTitle: 'Homepage',
        xAxis: namesArray,
      });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  getHomePage: getHomePage
};