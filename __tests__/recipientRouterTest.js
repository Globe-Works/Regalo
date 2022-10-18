const request = require('supertest');
const express = require('express');
const router = require('../server/routes/recipientRouter');

const app = new express();
app.use('/api/recipient', router);

describe('Recipient Router ', () => {
  it('Responds to POST /api/recipient', async () => {
    const res = await request(app).post('/api/recipient');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual({ message: 'We will add that recipient' });
  });

  it('Responds to GET /api/recipient', async () => {
    const res = await request(app).get('/api/recipient');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual({
      recipients: [
        {
          recipientId: 1,
          fullName: 'Bob Wilson',
          address: '95 Elizabeth St',
          city: 'New York',
          notes: 'Likes Cake',
          gifts: [{ giftId: 1, giftName: 'Teddy Bear', url: 'https://google.com', notes: '123' }],
        },
      ],
    });
  });

  it('Responds to PATCH /api/recipient', async () => {
    const res = await request(app).put('/api/recipient/123');
    expect(res.header['content-type']).toBe('application/json; charset=utf-8');
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res.text)).toEqual({ message: 'We will update that recipient' });
  });

  it('Responds to DELETE /api/recipient', async () => {
    const res = await request(app).delete('/api/recipient/123');
    expect(res.header['content-type']).toBe(undefined);
    expect(res.statusCode).toBe(204);
    expect(res.text).toBe('');
  });
});
