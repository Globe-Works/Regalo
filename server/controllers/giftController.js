const db = require('../models/giftModel');

const giftController = {};

giftController.getGifts = (req, res, next) => {
  const queryString = `SELECT * FROM gifts WHERE user_id=$1`;
  const userId = 1; //TODO: Pull userID from cookie
  db.query(queryString, [userId])
    .then((data) => (res.locals.gifts = data.rows))
    .then(() => next());
};

module.exports = giftController;
