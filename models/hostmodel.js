const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
   id:{
    type: String,
    required: true,
    unique: true
},
   isverified:{
    type:Boolean,
    default:false
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
    business:{
        type:String
    }
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
module.exports = mongoose.model("hostprofile", userSchema);