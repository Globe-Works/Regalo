const express = require('express');
const router = express.Router();

//CREATE
router.post('/', (req, res) => {
  res.status(200).json({ message: 'We will add that gift' });
});

//READ
router.get('/', (req, res) => {
  res.status(200).json({
    gifts: [
      { giftId: 1, giftName: 'Teddy Bear', url: 'https://google.com', notes: '123' },
      { giftId: 2, giftName: 'Flowers', url: 'https://yahoo.com', notes: 'abc' },
    ],
  });
});

//UPDATE
router.put('/:id', (req, res) => {
  res.status(200).json({ message: 'We will update that gift' });
});

//DELETE
router.delete('/:id', (req, res) => {
  res.status(204).send();
});

module.exports = router;
