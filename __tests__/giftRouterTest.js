const request = require('supertest');
const express = require('express');
const router = require('../server/routes/giftRouter');

const app = new express();
app.use('/api/gift', router);

describe('Gift Router ', () => {
  it('Responds to POST /api/gift', async () => {
    const res = await request(app).post('/api/gift');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual({ message: 'We will add that gift' });
  });

  it('Responds to GET /api/gift', async () => {
    const res = await request(app).get('/api/gift');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual({
      gifts: [
        { giftId: 1, giftName: 'Teddy Bear', url: 'https://google.com', notes: '123' },
        { giftId: 2, giftName: 'Flowers', url: 'https://yahoo.com', notes: 'abc' },
      ],
    });
  });

  it('Responds to PATCH /api/gift', async () => {
    const res = await request(app).put('/api/gift/123');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual({ message: 'We will update that gift' });
  });

  it('Responds to DELETE /api/gift', async () => {
    const res = await request(app).delete('/api/gift/123');
    expect(res.header['content-type']).toBe(undefined);
    expect(res.statusCode).toBe(204);
    expect(res.text).toBe('');
  });
});
