const express = require('express');
const router = express.Router();

//CREATE
router.post('/', (req, res) => {
  res.status(200).json({ message: 'We will add that match' });
});

//READ
router.get('/', (req, res) => {
  res.status(200).json({ matches: [{ Bob: 'gift1' }, { Betty: 'gift2' }] });
});

//DELETE
router.delete('/:id', (req, res) => {
  res.status(204).send();
});

module.exports = router;
