const { Pool } = require('pg');
const { pgSQLUserName, pgSQLPass } = require('../../.env');

console.log(pgSQLUserName, pgSQLPass);
const PG_URI = `postgres://${pgSQLUserName}:${pgSQLPass}@peanut.db.elephantsql.com/${pgSQLUserName}`;
const pool = new Pool({ connectionString: PG_URI });

module.exports = {
  query: (text, params, callback) => {
    console.log('server/models/giftmodels - executed query:', text);
    return pool.query(text, params, callback);
  },
};
