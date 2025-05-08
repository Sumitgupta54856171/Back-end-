const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
   otp:{
    type:String,
    required:true
   },
   id:{
    type: String,
    required: true,
},
   isverified:{
    type:Boolean,
    default:false
   },
   otpExpires: { 
    type: Date, default: () => new Date(Date.now() + 10 * 60 * 1000) 
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
        enum:['user','business'],
        default:'user'
    },
 
})


userSchema.pre('save', async function(next) {
    if(!this.isModified('password'))  return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("hosttempUser", userSchema);