const express = require('express');
const router = express.Router();
const giftController = require('../controllers/giftController');

//CREATE
router.post('/', giftController.createGift, (req, res) => {
  res.status(200).json({ message: 'We will add that gift' });
});

//READ
router.get('/', giftController.getGifts, (req, res) => {
  res.status(200).json(res.locals.gifts);
});

//UPDATE
router.put('/', giftController.updateGift, (req, res) => {
  res.status(200).json({ message: 'We will update that gift' });
});

//DELETE
router.delete('/:id', giftController.deleteGift, (req, res) => {
  res.status(204).send();
});

module.exports = router;
