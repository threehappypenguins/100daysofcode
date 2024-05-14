const express = require('express');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash'); // Import connect-flash
const initializePassport = require('./passport-config');
const users = require('./users'); // Import the users array

const app = express();
const PORT = process.env.PORT || 3000;

initializePassport(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(flash()); // Use connect-flash middleware
app.use(passport.initialize());
app.use(passport.session());

// Middleware to set flash messages to res.locals for easy access in views
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const newUser = { email, password };
  users.push(newUser);
  req.flash('success_msg', 'You are now registered and can log in');
  res.redirect('/login');
});

app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      req.flash('error', info.message);
      return res.status(401).json({ error: info.message }); // Send error message as JSON
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      return res.status(200).json({ message: 'Logged in successfully' }); // Send success message as JSON
    });
  })(req, res, next);
});

app.get('/dashboard', (req, res) => {
  if (req.isAuthenticated()) {
    res.send('Welcome to your dashboard!');
  } else {
    res.redirect('/login');
  }
});

app.get('/login', (req, res) => {
  const error = req.flash('error');
  res.send(`Login page. Error: ${error}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
