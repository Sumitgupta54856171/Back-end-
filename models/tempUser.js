const mongoose = require('mongoose');

const tempUserSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
   otp:{
    type:String,
    required:true
   },
   otpExpires: { 
    type: Date, default: () => new Date(Date.now() + 10 * 60 * 1000) 
},
})
module.exports = mongoose.model('TempUser',tempUserSchema)