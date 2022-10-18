const { Pool } = require('pg');
const { pgSQLUserName, pgSQLPass } = require('../.env');

const PG_URI = `postgres://${pgSQLUserName}:${pgSQLPass}@peanut.db.elephantsql.com/${pgSQLUserName}`;
const pool = new Pool({ connectionString: PG_URI });
const testQuery = async (query) => {
  try {
    const client = await pool.connect();
    return await client.query(`
      BEGIN TRANSACTION;
      ${query}
      ROLLBACK TRANSACTION;
    `);
  } catch (err) {
    console.log(`Error performing test query ${query}, ${err}`);
  } finally {
    (await pool.connect()).release();
  }
};
describe('Data Base Connection', () => {
  it('Should query users table from db', async () => {
    const { recordset } = await testQuery(
      `SELECT * FROM users;
      `,
    );
    console.log(recordset);
    expect(recordset).toStrictEqual([expect.objectContaining({ first_name: 'Matt' })]);
  });
});
