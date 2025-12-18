const mongoose = require('mongoose');

const oauthSchema = new mongoose.Schema({
  googleId: String,
  displayName: String,
  imageUrl: String,
  email: String
})

module.exports = mongoose.model('Oauth', oauthSchema);