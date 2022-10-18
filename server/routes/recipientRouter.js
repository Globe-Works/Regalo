const express = require('express');
const router = express.Router();

//CREATE
router.post('/', (req, res) => {
  res.status(200).json({ message: 'We will add that recipient' });
});

//READ
router.get('/', (req, res) => {
  res.status(200).json({
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

//UPDATE
router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'We will update that recipient' });
});

//DELETE
router.delete('/:id', (req, res) => {
  res.status(204).send();
});

module.exports = router;
