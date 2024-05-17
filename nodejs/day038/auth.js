const express = require('express');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

const router = express.Router();

// Configure Passport with the GitHub strategy
passport.use(new GitHubStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/github/callback'
},
(accessToken, refreshToken, profile, done) => {
  // In a real application, you would look up or create a user record in your database here
  return done(null, profile);
}));

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user from the session
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Route for initiating GitHub authentication
router.get('/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

// Route for handling GitHub authentication callback
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to the profile page
    res.redirect('/profile');
  }
);

module.exports = router;
