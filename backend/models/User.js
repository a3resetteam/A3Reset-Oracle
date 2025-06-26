const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  status: { type: String, enum: ['pending', 'active'], default: 'pending' }, // 'pending' before payment, 'active' after
  stripeCustomerId: { type: String }, // Set when Stripe payment completes
});

module.exports = mongoose.model('User', userSchema);
