const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose'); // lets you interact with database
const User = require('../models/User'); // model for database

// Strategy to make google authentication profile
module.exports = passport => {
  passport.use(
    new GoogleStrategy({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback'
    },
      // using async/await because we are dealing with Mongoose
      async (accessToken, refreshToken, profile, cb) => {
        // saving data to the MongoDB database via mongoose

        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value
        }

        try {
          let user = await User.findOne({ googleId: profile.id })

          if (user) {
            cb(null, user);
          } else {
            // creata a user based on the User Schema if one doesn't exist
            user = await User.create(newUser); 
            cb(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
  ));

  // calling callback
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  })
  passport.deserializeUser((id, cb) => { // bug was here grabbing id now
    User.findById(id, (err, user) => cb(err, user));
  })
}
