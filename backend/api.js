const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Registration: save user, return Stripe payment link
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({ email, passwordHash, status: 'pending' });
    // Return your Stripe Payment Link
    res.json({ url: 'https://buy.stripe.com/4gMaEY09v1UIcmW1EY6wE04' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login: check credentials and payment status
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.passwordHash);
  if (!match) return res.status(401).json({ error: 'Invalid credentials' });

  if (user.status !== 'active') {
    return res.status(402).json({ error: 'Please complete payment to access the dashboard.' });
  }

  res.json({ message: 'Login successful' });
});

module.exports = router;
