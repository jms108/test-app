const express = require('express');
const router = express.Router();

// Get all trains
router.get('/', (req, res) => {
  res.json({ message: 'List of all trains' });
});

// Get specific train by ID
router.get('/:id', (req, res) => {
  res.json({ message: `Details for train ID ${req.params.id}` });
});

// Add new train
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Train added successfully' });
});

// Update train
router.put('/:id', (req, res) => {
  res.json({ message: `Train ID ${req.params.id} updated` });
});

// Delete train
router.delete('/:id', (req, res) => {
  res.json({ message: `Train ID ${req.params.id} deleted` });
});

module.exports = router;