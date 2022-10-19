const passport = require('passport');
const express = require('express');
const router = express.Router();

const CLIENT_URL = 'http://localhost:8080';

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: CLIENT_URL,
    failureRedirect: '/failure',
  }),
);

router.get('/success', (req, res) => {
  if (req.user) {
    res
      .status(200)
      .json({ success: true, message: 'success', user: req.user, cookies: req.cookies });
  }
});
router.get('/failure', (req, res) => {
  res.status(401).json({ success: false, message: 'failure to authenticate' });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect(CLIENT_URL);
});

const isLoggedIn = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json('Error: User not authorized');
  }
  return next();
};

router.get('/', isLoggedIn, (req, res) => {
  console.log('req.user: ' + req.user.userId);
  res.status(200).json(req.user);
});

module.exports = router;
