const db = require('../models/giftModel');

const recipientController = {};

recipientController.getRecipients = (req, res, next) => {
  const queryString = `SELECT r.*, g.title, g._id as giftId, g.url, g.img_url, g.notes, g.description FROM recipients r LEFT JOIN gifts_for_recipients gj ON r._id=gj.recipient_id AND user_id=$1 LEFT JOIN gifts g ON g._id=gj.gift_id`;
  const userId = 1; //TODO: Pull userID from cookie
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
    next();
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
