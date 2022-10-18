const express = require('express');
const router = express.Router();

//CREATE
router.post('/', (req, res) => {
  res.status(200).json({ message: 'We will add that recipient' });
});

//READ
router.get('/', (req, res) => {
  res.status(200).json({ recipients: ['Betty', 'Bob'] });
});

//UPDATE
router.patch('/:id', (req, res) => {
  res.status(200).json({ message: 'We will update that recipient' });
});

//DELETE
router.delete('/:id', (req, res) => {
  res.status(204).send();
});

module.exports = router;
