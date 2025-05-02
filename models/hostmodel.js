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
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
};
module.exports = mongoose.model("hostprofile", userSchema);