const express = require('express');
const router = express.Router();

// Create new booking
router.post('/', (req, res) => {
  res.status(201).json({ message: 'Booking created successfully' });
});

// Get bookings for a user
router.get('/user/:userId', (req, res) => {
  res.json({ message: `Bookings for user ID ${req.params.userId}` });
});

// Cancel booking
router.put('/cancel/:id', (req, res) => {
  res.json({ message: `Booking ID ${req.params.id} cancelled` });
});

module.exports = router;