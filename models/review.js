const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    reviewer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reviewType: { 
    type: String, 
    enum: ['property', 'service', 'transportation'], 
    required: true 
  },
  targetId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Property, Service, or Transportation ID
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  images: [String],
  reply: {
    text: String,
    date: Date
  },
  createdAt: { type: Date, default: Date.now }
}, {timestamps:true});

module.exports = mongoose.model('Review', ReviewSchema);