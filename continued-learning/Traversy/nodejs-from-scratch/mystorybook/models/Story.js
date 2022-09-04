// Setting Schemas for MongoDB using mongoose
const mongoose = require('mongoose');

// Story Schema
const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

// exports story schema as a mongoose model for Database
module.exports = mongoose.model('Story', StorySchema)
