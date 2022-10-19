const passport = require('passport');
const { query } = require('../models/giftModel');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = require('../../.env');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/auth/google/callback',
    },
    function (access_token, refresh_token, profile, cb) {
      query('SELECT * FROM users WHERE google_id = $1', [profile.id])
        .then((data) => {
          if (data.rows.length === 0) {
            // USER NOT FOUND, CREATE NEW USER
            query(
              'INSERT INTO users (display_name, email, google_id) VALUES ($1, $2, $3) RETURNING _id',
              [profile.displayName, profile.emails[0].value, profile.id],
            ).then((response) => {
              return {
                userId: response.rows[0]._id,
                displayName: profile.displayName,
              };
            });
          } else {
            //USER FOUND, RETURN USER
            const { displayName } = data.rows[0];
            const userId = data.rows[0]._id;
            return {
              userId,
              displayName,
            };
          }
        })
        .then((user) => cb(null, user));
    },
  ),
);
