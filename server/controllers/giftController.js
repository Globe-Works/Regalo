const db = require('../models/giftModel');

const giftController = {};

const queryString = `SELECT * FROM users`;
db.query(queryString).then((data) => console.log(data));
