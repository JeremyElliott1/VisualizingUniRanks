const db = require('../util/database.js')

getHomePage = (req, res, next) => {
  db.connection.query('SELECT universityName FROM leaguetableranking')
    .then(([rowData, columnData]) => {
      let array = [];
      rowData.forEach(rowValue => {
        array.push(rowValue.universityName);
      });
      secondArray = array.slice(0);
      array = JSON.stringify(array);

      console.log(secondArray);

      res.render('home.ejs', {
        pageTitle: 'Homepage',
        xAxis: array,
        secondArray: secondArray
      });

    })
    .catch((err) => console.log(err));
};

module.exports = {
  getHomePage: getHomePage
};