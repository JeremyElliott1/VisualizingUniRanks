getHomePage = (req, res, next) => {
  res.render('home.ejs', {
    pageTitle: 'Homepage',
  });
};

exports.getHomePage = getHomePage;