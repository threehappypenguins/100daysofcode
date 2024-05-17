const express = require('express');
const session = require('express-session');
const passport = require('passport');
const dotenv = require('dotenv').config();
const authRouter = require('./auth');

const app = express();

// Set up session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport and restore authentication state from the session
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1><a href="/auth/github">Login with GitHub</a>');
});

// Mount the authentication routes
app.use('/auth', authRouter);

// Profile route - This route should be after authentication middleware
app.get('/profile', ensureAuthenticated, (req, res) => {
  res.send(`<h1>Profile</h1><p>Hello, ${req.user.username}!`);
});

// Middleware to ensure the user is authenticated
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

// Login route
app.get('/auth/github', (req, res, next) => {
    // Check if the user is not already authenticated
    if (!req.isAuthenticated()) {
      return next(); // Proceed to authentication middleware
    }
    res.redirect('/profile'); // Redirect to profile if already logged in
  }, passport.authenticate('github', { scope: ['user:email'] }));

// Authentication callback route
app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to the profile page
    res.redirect('/profile');
  }
);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
