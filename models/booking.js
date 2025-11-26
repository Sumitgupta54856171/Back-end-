const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  listingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Listing',
    required: [true, 'Booking must belong to a Listing!']
  },
  guestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assumes you have a User model
    required: [true, 'Booking must belong to a User!']
  },
  checkIn: {
    type: Date,
    required: [true, 'Check-in date is required']
  },
  checkOut: {
    type: Date,
    required: [true, 'Check-out date is required']
  },
  numberOfGuests: {
    adults: { type: Number, required: true, min: 1 },
    children: { type: Number, default: 0 },
    infants: { type: Number, default: 0 }
  },
  totalPrice: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  paymentInfo: {
    id: String, // Stripe/PayPal Transaction ID
    status: {
      type: String,
      enum: ['pending', 'paid', 'failed', 'refunded'],
      default: 'pending'
    }
  }
}, {
  timestamps: true
});

BookingSchema.pre('validate', function(next) {
  if (this.checkIn >= this.checkOut) {
    next(new Error('Check-out date must be after check-in date'));
  } else {
    next();
  }
});

BookingSchema.index({ listingId: 1, checkIn: 1, checkOut: 1 });
BookingSchema.index({ guestId: 1 });

module.exports = mongoose.model('Booking', BookingSchema);