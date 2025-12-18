const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
   isverified:{
    type:Boolean,
    default:false
   },

    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type:String,
        enum:['user','business',"admin"],
        default:'user'
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        zipCode: String
      },
      createdAt: { type: Date, default: Date.now }
 
})

userSchema.index({ email: 1 }, { unique: true });
userSchema.pre('save', async function(next) {
    if(!this.isModified('password'))  return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("user", userSchema);