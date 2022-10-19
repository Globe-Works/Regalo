const db = require('../models/giftModel');

const giftController = {};

giftController.getGifts = (req, res, next) => {
  const queryString = `SELECT * FROM gifts WHERE user_id=$1`;
  const userId = 1; //TODO: Pull userID from cookie
  db.query(queryString, [userId])
    .then((data) => (res.locals.gifts = data.rows))
    .then(() => next());
};

giftController.createGift = (req, res, next) => {
  const { title, price, description, url, userId, notes, imgUrl, recipientId } = req.body;
  const queryForNewestGift = `SELECT MAX(_id) FROM gifts WHERE user_id = $1`;
  const queryString1 = `INSERT INTO gifts (title, price, description, url, user_id, notes, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
  const addToJoin = `INSERT INTO gifts_for_recipients (gift_id, recipient_id) VALUES ($1, $2)`;
  db.query(queryString1, [title, price, description, url, userId, notes, imgUrl]).then((data) => {
    if (!recipientId) return next();
    db.query(queryForNewestGift, [userId]).then((data) => {
      const giftId = data.rows[0].max;
      db.query(addToJoin, [giftId, recipientId]).then((data) => {
        console.log(`Added ${title} to gifts and gifts_for_recipients`);
        return next();
      });
    });
  });
};

giftController.updateGift = (req, res, next) => {
  const { giftId, userId, title, price, description, url, notes, imgUrl } = req.body;
  const queryString = `UPDATE gifts
                      SET user_id = $2, title = $3, price = $4, description = $5, url = $6, notes = $7, img_url = $8
                      WHERE _id = $1;`;
  db.query(queryString, [giftId, userId, title, price, description, url, notes, imgUrl]).then(
    (data) => {
      console.log(data);
      return next();
    },
  );
};

giftController.deleteGift = (req, res, next) => {
  //pgSQL doesn't allow multi line queries when using parameters so chained the queries
  const queryString1 = `DELETE FROM gifts_for_recipients WHERE gift_id = $1`;
  const queryString2 = `DELETE FROM gifts WHERE _id = $1`;
  db.query(queryString1, [req.params.id]).then((data) => {
    db.query(queryString2, [req.params.id]).then((data) => {
      console.log(data);
      return next();
    });
  });
};
module.exports = giftController;
