const mongoose =require('mongoose');

const homeSigma =new mongoose.Schema({
   title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description']
  },
  type: {
    type: String,
    required: true,
    enum: ['apartment', 'house', 'villa', 'Hotel room']
  },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  stats: {
    guests: { type: Number, required: true, min: 1 },
    bedrooms: { type: Number, required: true, min: 0 },
    beds: { type: Number, required: true, min: 0 },
    baths: { type: Number, required: true, min: 0 }
  },
  price: {
    amount: { type: Number, required: true },
    currency: { type: String, default: 'USD' },
    period: { type: String, default: 'night' }
  },
  images: {
    type: [String],
    validate: {
      validator: function(v) {
        return v && v.length > 0;
      },
      message: 'A listing must have at least one image.'
    }
  },
  amenities: {
    type: [String],
    default: []
  },
  productid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user',
    required:true
},
rating: {
    average: { type: Number, default: 0, min: 0, max: 5 },
    count: { type: Number, default: 0 }
  },
  availability: {
    blockedDates: {
      type: [Date],
      default: []
    }
  }
},
{timestamps:true}
);
const serviceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  serviceType: { 
    type: String, 
    enum: ['housekeeping','laundry', 'cook', 'driver', 'guide'], 
    required: true 
  },
  experience: { type: Number, required: true }, // years
  skills: [String],
  languages: [String],
  hourlyRate: { type: Number, required: true },
  availability: [{
    date: Date,
    slots: [{ startTime: String, endTime: String, available: Boolean }]
  }],
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
  documents: {
    idProof: String,
    backgroundCheck: String,
    certifications: [String]
  },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
})
const TransportationSchema = new mongoose.Schema({
  type: { 
      type: String, 
      enum: ['airplane', 'train', 'private_car', 'cab'], 
      required: true 
    },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    // For airplane and train
    departureLocation: {
      city: String,
      airport: String,
      station: String,
      terminal: String
    },
    arrivalLocation: {
      city: String,
      airport: String,
      station: String,
      terminal: String
    },
    departureTime: Date,
    arrivalTime: Date,
    // For cars and cabs
    vehicleDetails: {
      make: String,
      model: String,
      year: Number,
      color: String,
      licensePlate: String,
      capacity: Number,
      features: [String]
    },
    price: {
      type: Number,
      required: true
    },
    availability: {
      type: [Date],
      default: []
    },
    rating: { type: Number, default: 0 },
    available: { type: Boolean, default: true },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
}, {timestamps:true});

module.exports = mongoose.model('Transportation', TransportationSchema);
module.exports = mongoose.model('service', serviceSchema);
module.exports = mongoose.model('home',homeSigma);