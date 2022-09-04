module.exports = {
  // makes sure we can't go back to other sub pages if not logged in
  ensureAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      res.redirect('/'); // redirect is freezing on me
    }
  },
  ensureGuest: function(req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/dashboard')
    } else {
      return next();
    }
  },
}
