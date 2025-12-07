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
const serviceBookingSchema = new mongoose.Schema({
  booking: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking' },
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceProvider: { type: mongoose.Schema.Types.ObjectId, ref: 'ServiceProvider', required: true },
  serviceType: { 
    type: String, 
    enum: ['servant', 'cook', 'driver', 'guide'], 
    required: true 
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  hours: { type: Number, required: true },
  specialRequirements: String,
  pricing: {
    hourlyRate: { type: Number, required: true },
    totalHours: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
  },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'in_progress', 'completed', 'cancelled'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now }
}, {timestamps:true});
const transportationBookingSchema = new mongoose.Schema({
  transportation: { type: mongoose.Schema.Types.ObjectId, ref: 'Transportation', required: true },
  guest: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookingType: { 
    type: String, 
    enum: ['airplane', 'train', 'private_car', 'cab'], 
    required: true 
  },
  // For flights and trains
  passengerDetails: [{
    name: String,
    age: Number,
    seatNumber: String
  }],
  // For cars and cabs
  pickupLocation: {
    address: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  dropoffLocation: {
    address: String,
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  pickupTime: Date,
  distance: Number, // in km
  duration: Number, // in minutes
  specialRequirements: String,
  pricing: {
    basePrice: { type: Number, required: true },
    additionalCharges: Number,
    totalPrice: { type: Number, required: true }
  },
  status: { 
    type: String, 
    enum: ['pending', 'confirmed', 'in_transit', 'completed', 'cancelled'], 
    default: 'pending' 
  },
  paymentStatus: { 
    type: String, 
    enum: ['pending', 'paid', 'refunded'], 
    default: 'pending' 
  },
  createdAt: { type: Date, default: Date.now }
});
BookingSchema.index({ listingId: 1, checkIn: 1, checkOut: 1 });
BookingSchema.index({ guestId: 1 });

module.exports=mongoose.model('serviceBooking', serviceBookingSchema);
module.exports=mongoose.model('transportationBooking', transportationBookingSchema);
module.exports = mongoose.model('propertyBooking', BookingSchema);