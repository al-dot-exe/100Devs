const express = require('express');
const router = express.Router();
// destructured to get middleware
const { ensureAuth, ensureGuest } = require('../middleware/authMiddle');

const Story = require('../models/Story');

//This is our routing processor file,
//this file is the first step a client takes before getting sent to a controller

// @desc    Login/Landing Page
// @route   GET / 
router.get('/', ensureGuest, (req, res) => {
  res.render('login', {
    layout: 'login_layout',
  })
});

// @desc    Dashboard
// @route   GET /dashboard
router.get('/dashboard', ensureAuth, async (req, res) => { // make sure user logged in
  // console.log(req.user);
  try {
    const stories = await Story.find({ user: req.user.id }).lean()
    res.render('dashboard', {
      name: req.user.firstName,
      stories
    });
  } catch (err) {
    console.error(err)
    res.render('error/500');
  }
});

module.exports = router
