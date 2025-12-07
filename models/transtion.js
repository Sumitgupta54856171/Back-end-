const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  bookingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
    required: [true, 'Transaction must belong to a booking']
  },
  bookingType: {
    type: String,
    enum: ['property', 'service', 'transportation'],
    required: true
  },
  hostid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Transaction must belong to a user']
  },
  userId: { // Guest who paid
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Transaction must belong to a user']
  },
  amount: {
    type: Number,
    required: [true, 'Transaction must have an amount']
  },
  currency: {
    type: String,
    default: 'USD'
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'paypal', 'wallet', 'bank_transfer'],
    required: true
  },
  paymentProvider: {
    type: String,
    required: true
  },
  transactionId: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    enum: ['pending', 'success', 'failed', 'refunded'],
    default: 'pending'
  },house_id:{
  type:mongoose.Schema.Types.ObjectId,
  ref:"home"
  },
  receiptUrl: {
    type: String
  }
}, {
  timestamps: true
});

TransactionSchema.index({ transactionId: 1 });
TransactionSchema.index({ bookingId: 1 });
TransactionSchema.index({ userId: 1 });

module.exports = mongoose.model('Transaction', TransactionSchema);