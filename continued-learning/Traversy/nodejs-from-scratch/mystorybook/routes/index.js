const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/authMiddle');

// // This is our routing processor file,
// // this file is the first step a client takes before getting sent to a controller

// // @desc    Login/Landing Page
// // @route   GET / 
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login_layout',
  })
});

// // @desc    Dashboard
// // @route   GET /dashboard
router.get('/dashboard', ensureAuth, (req, res) => {
  res.render('dashboard')
});

module.exports = router
