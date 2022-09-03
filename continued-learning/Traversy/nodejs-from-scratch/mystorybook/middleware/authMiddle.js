// found out I'm not getting authenticated here :/ will find out later

module.exports = {
  // makes sure we can't go back to other sub pages if not logged in
  ensureAuth: function (req, res, next) {
    console.log(req.isAuthenticated());

    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/');
    }
  },
  ensureGuest: function (req, res, next) {
    console.log(req.isAuthenticated());

    if(req.isAuthenticated()) {
      res.redirect('/dashboard')
    } else {
      return next();
    }
  },
}
