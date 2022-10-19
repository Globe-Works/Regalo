const db = require('../models/giftModel');

const recipientController = {};

recipientController.getRecipients = (req, res, next) => {
  const queryString = `SELECT r.*, g.title, g._id as giftId, g.url, g.img_url, g.notes, g.description FROM recipients r LEFT JOIN gifts_for_recipients gj ON r._id=gj.recipient_id AND user_id=$1 LEFT JOIN gifts g ON g._id=gj.gift_id`;
  const userId = req.params.id; //TODO: Pull userID from cookie
  db.query(queryString, [userId])
    .then((data) =>
      data.rows.reduce((acc, curr) => {
        let elToUpdate = acc.find((el) => el.id === curr._id);
        if (!elToUpdate) {
          elToUpdate = {
            id: curr._id,
            fullName: curr.full_name,
            address: curr.address,
            city: curr.city,
            state: curr.state,
            country: curr.country,
            notes: curr.notes,
            gifts: [],
          };
          acc.push(elToUpdate);
        }
        if (curr.title) {
          elToUpdate.gifts.push({
            giftName: curr.title,
            giftId: curr.giftId,
            url: curr.url,
            img_url: curr.img_url,
            description: curr.description,
          });
        }
        return acc;
      }, []),
    )
    .then((data) => (res.locals.recipients = data))
    .then(() => next());
};
recipientController.postRecipient = (req, res, next) => {
  const { user_id, full_name, address, city, state, country, zip_code, notes } = req.body;
  const queryString = `INSERT INTO recipients (user_id, full_name, address, city, state, country, zip_code, notes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;
  db.query(queryString, [
    user_id,
    full_name,
    address || null,
    city || null,
    state || null,
    country || null,
    zip_code || null,
    notes || null,
  ]).then((data) => {
    console.log(data);
    return next();
  });
};
recipientController.updateRecipient = async (req, res, next) => {
  const { _id, user_id, full_name, address, city, state, country, zip_code, notes } = req.body;
  const queryString = `UPDATE recipients
                      SET user_id = $2, full_name = $3, address = $4, city = $5, state = $6, country = $7, zip_code = $8, notes = $9
                      WHERE _id = $1;`;

  db.query(queryString, [
    _id,
    user_id,
    full_name,
    address,
    city,
    state,
    country,
    zip_code,
    notes,
  ]).then((data) => {
    console.log(data);
    return next();
  });
};

recipientController.deleteRecipient = (req, res, next) => {
  //pgSQL doesn't allow multi line queries when using parameters so chained the queries
  const queryString1 = `DELETE FROM gifts_for_recipients WHERE recipient_id = $1`;
  const queryString2 = `DELETE FROM recipients WHERE _id = $1`;
  db.query(queryString1, [req.params.id]).then((data) => {
    db.query(queryString2, [req.params.id]).then((data) => {
      console.log(data);
      return next();
    });
  });
};
/**
 * Optional other SQL QUERY for getRecipients
 * SELECT r._id, r.full_name,  r.address, r.city, r.notes, g._id AS gift_id, g.title, g.url, g.notes AS gift_notes, g.img_url
FROM recipients r
LEFT JOIN gifts_for_recipients gj ON r._id=gj.recipient_id AND user_id=1 LEFT JOIN gifts g ON g._id=gj.gift_id
ORDER BY r._id
 */
module.exports = recipientController;

// [
//   {
//       "_id": 1,
//       "user_id": 1,
//       "full_name": "Dipen Nagpal",
//       "address": null,
//       "city": null,
//       "state": null,
//       "country": null,
//       "zip_code": null,
//       "notes": null,
//       "gifts": []
//   },
//   {
//       "_id": 2,
//       "user_id": 1,
//       "full_name": "Craig Boswell",
//       "address": null,
//       "city": null,
//       "state": null,
//       "country": null,
//       "zip_code": null,
//       "notes": null,
//       "gifts": [{
//         "_id": 1,
//         "title": "Xbox",
//         "price": null,
//         "description": null,
//         "url": null,
//         "user_id": 1,
//         "notes": null,
//         "img_url": null
//          }]
//   },
//   {
//       "_id": 3,
//       "user_id": 1,
//       "full_name": "Lilah August",
//       "address": null,
//       "city": null,
//       "state": null,
//       "country": null,
//       "zip_code": null,
//       "notes": null,
//       "gifts": [{
//         "_id": 2,
//         "title": "PS5",
//         "price": null,
//         "description": null,
//         "url": null,
//         "user_id": 1,
//         "notes": null,
//         "img_url": null
//          }]
//   },
//   {
//       "_id": 4,
//       "user_id": 1,
//       "full_name": "Jeremy Vogel",
//       "address": null,
//       "city": null,
//       "state": null,
//       "country": null,
//       "zip_code": null,
//       "notes": null,
//       "gifts": []
//   }
// ]
