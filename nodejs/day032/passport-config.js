const LocalStrategy = require('passport-local').Strategy;
const users = require('./users'); // Import the users array

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Find user by email
      const user = users.find(user => user.email === email);
      if (!user) {
        return done(null, false, { message: 'No user with that email' });
      }

      // Check password
      if (user.password !== password) {
        return done(null, false, { message: 'Password incorrect' });
      }

      return done(null, user);
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.email);
  });

  passport.deserializeUser((email, done) => {
    const user = users.find(user => user.email === email);
    done(null, user);
  });
};