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
    enum: ['Entire home', 'Private room', 'Shared room', 'Hotel room']
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
module.exports = mongoose.model('home',homeSigma);