const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
const db = require('../models/db');
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
      callbackURL: 'http://localhost:8080/api/callback',
    },
    function (issuer, profile, cb) {
      console.log({ profile });
      // db.query('SELECT * FROM users WHERE google_id = ?', [profile.id]).then((data) => {
      //   if (data.rows.length === 0) {
      //     // User Not Found
      //     // Create a new user record and link it to the Google account.
      //     let firstName = profile.displayName;
      //     let lastName = null;
      //     if (profile.displayName.search(' ') !== -1) {
      //       [firstName, lastName] = profile.displayName.split(' ');
      //     }
      //     db.query(
      //       'INSERT INTO users (first_name, last_name, email, google_id) VALUES ($1, $2, $3, $4) RETURNING _id',
      //       [firstName, lastName, profile.email, profile.id],
      //     )
      //       .then((returnedRow) => {
      //         console.log({ returnedRow });
      //         return returnedRow;
      //       })
      //       .then((returnedRow) => ({
      //         id: returnedRow._id,
      //         name: profile.displayName,
      //       }))
      //       .then((user) => cb(null, user));
      //   }
      // });
      cb(null, {
        id: '123124',
        name: 'Craig Boswell',
      });
    },
  ),
);
