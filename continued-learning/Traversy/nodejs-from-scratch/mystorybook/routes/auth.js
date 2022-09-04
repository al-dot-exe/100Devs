const express = require('express');
const passport = require('passport');
const router = express.Router();

// // This is our routing processor file,
// // this file is the first step a client takes before getting sent to a controller

// // @desc    Auth with Google
// // @route   GET /auth/google 
router.get('/google', passport.authenticate('google',
  {
    scope: ['profile'] // grabbing the scope of what's in our Google Strategy profile
  }
));

// // @desc    Google auth callback
// // @route   GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {
  // if it failes go to / if success go to dashboard
  failureRedirect: '/'
}), (req, res) => {
  res.redirect('/dashboard')
});

// @desc   Logout user
// @route  GET /auth/logout
router.get('/logout', (req, res) => {
  req.logout(err => { // logout requires a callback function now since traversy
    if (err) { return next(err); }
    res.redirect('/');
  });
});


module.exports = router
