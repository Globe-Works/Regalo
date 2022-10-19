const express = require('express');
const recipientController = require('../controllers/recipientController');
const router = express.Router();

//CREATE
router.post('/', recipientController.postRecipient, (req, res) => {
  res.status(200).json({ message: 'We will add that recipient' });
});

//READ
router.get('/', recipientController.getRecipients, (req, res) => {
  res.status(200).json(res.locals.recipients);
});

//UPDATE
router.put('/', recipientController.updateRecipient, (req, res) => {
  res.status(200).json({ message: 'We will update that recipient' });
});

//DELETE
router.delete('/:id', recipientController.deleteRecipient, (req, res) => {
  res.status(204).send();
});

module.exports = router;
