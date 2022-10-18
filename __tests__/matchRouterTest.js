const request = require('supertest');
const express = require('express');
const router = require('../server/routes/matchRouter');

const app = new express();
app.use('/api/match', router);

describe('Gift Router ', () => {
  it('Responds to POST /api/match', async () => {
    const res = await request(app).post('/api/match');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual({ message: 'We will add that match' });
  });

  it('Responds to GET /api/match', async () => {
    const res = await request(app).get('/api/match');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual({ matches: [{ Bob: 'gift1' }, { Betty: 'gift2' }] });
  });

  it('Responds to DELETE /api/match', async () => {
    const res = await request(app).delete('/api/match/123');
    expect(res.header['content-type']).toBe(undefined);
    expect(res.statusCode).toBe(204);
    expect(res.text).toBe('');
  });
});
