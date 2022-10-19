const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

//CREATE
router.post('/', matchController.createMatch, (req, res) => {
  res.status(200).json({ message: 'We will add that match' });
});

//READ
router.get('/', (req, res) => {
  res.status(200).json({ matches: [{ Bob: 'gift1' }, { Betty: 'gift2' }] });
});

//DELETE
router.delete('/', matchController.deleteMatch, (req, res) => {
  res.status(204).send();
});

module.exports = router;
