getHomePage = (req, res, next) => {
  res.render('home.ejs', {
    pageTitle: 'Homepage',
  });
};

module.exports = {
  getHomePage: getHomePage
}