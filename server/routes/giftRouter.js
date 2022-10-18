const express = require('express');
const router = express.Router();

//CREATE
router.post('/', (req, res) => {
  res.status(200).send('We will add that gift');
});

//READ
router.get('/', (req, res) => {
  res.status(200).json({ gifts: ['gift1', 'gift1'] });
});

//UPDATE
router.patch('/:id', (req, res) => {
  res.status(200).send('We will update that gift');
});

//DELETE
router.delete('/:id', (req, res) => {
  res.status(204).send();
});

module.exports = router;
