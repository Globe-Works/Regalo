const { Pool } = require('pg');
const { ENV } = require('../.env');
const PG_URI = `postgres://${ENV.pgSQLUserName}:${pgSQLPass}@peanut.db.elephantsql.com/eyrrjpct`;
const pool = new Pool({ connectionString: PG_URI });
