const db = require('../models/giftModel');

const matchController = {};

matchController.createMatch = (req, res, next) => {
  const { giftId, recipientId } = req.body;
  const queryString = `INSERT INTO gifts_for_recipients (gift_id, recipient_id) VALUES ($1, $2)`;
  db.query(queryString, [giftId, recipientId]).then((data) => {
    console.log(data);
    return next();
  });
};

matchController.deleteMatch = (req, res, next) => {
  const { giftId, recipientId } = req.body;
  const queryString = `DELETE FROM gifts_for_recipients WHERE gift_id = $1 AND recipient_id = $2`;
  db.query(queryString, [giftId, recipientId]).then((data) => {
    console.log(data);
    return next();
  });
};
module.exports = matchController;
