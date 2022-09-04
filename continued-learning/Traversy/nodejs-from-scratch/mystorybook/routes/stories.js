const express = require('express');
const router = express.Router();
// destructured to get middleware
const { ensureAuth } = require('../middleware/authMiddle');

const Story = require('../models/Story');

//This is our routing processor file,
//this file is the first step a client takes before getting sent to a controller

// @desc    Show Add Page
// @route   GET /stories/add 
router.get('/add', ensureAuth, (req, res) => {
  res.render('stories/add');
});

// @desc    Process Add Form
// @route   GET /stories/add 
router.post('/', ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id;
    await Story.create(req.body)
    res.redirect('/dashboard')
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
});

// @desc    Show All Stories
// @route   GET /stories/add 
router.get('/', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ status: 'public' })
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean()
    res.render('stories/index', {
      stories
    });
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
});

// @desc    Show single story
// @route   GET /stories/add 
router.get('/:id', ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id)
      .populate('user')
      .lean()
    if (!story) {
      return res.render('error/404')
    } else {
      res.render('stories/show', {
        story
      })
    }
  } catch (err) {
    console.error(err);
    res.render('error/404')
  }
});

// @desc    Show Edit Page
// @route   GET /stories/edit/:id
router.get('/edit/:id', ensureAuth, async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.id
    }).lean();

    // return 404 if there's no story
    if (!story) {
      return res.render('error/404');
    }
    // ensure user safety and can't access others stories to edit
    if (story.user != req.user.id) {
      res.redirect('/stories');
    } else {
      res.render('stories/edit', {
        story
      });
    }
  } catch (error) {
    console.error('error/500')
  }
});


// @desc    Update Story
// @route   Put /stories/:id
router.put('/:id', ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).lean();
    if (!story) {
      return res.render('error/404');
    } else {
      story = await Story.findOneAndUpdate({
        _id: req.params.id
      }, req.body, {
        new: true,
        runValidators: true
      })
      res.redirect('/dashboard');
    };
  } catch (err) {
    console.error(err)
  }
});

// --

// @desc    Delete Story
// @route   DELETE /stories/add 
router.delete('/:id', ensureAuth, async (req, res) => {
  try {
    await Story.remove({
      _id: req.params.id
    });
    res.redirect('/dashboard')
  } catch (err) {
    console.error(err);
    return res.render('error/500');
  }
});

// @desc    User Stories
// @route   GET /stories/user/:userId
router.get('/user/:userId', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.params.userId,
      status: 'public'
    })
      .populate('user')
      .lean()

    res.render('stories/index', {
      stories
    })
  } catch (err) {
    console.error(err);
    res.render('error/500');
  }
});


// export routes
module.exports = router
