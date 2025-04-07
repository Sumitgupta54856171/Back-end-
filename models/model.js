const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
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
    }
})

const userhome= new mongooose({
    home:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    city:{
  type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
  price:{
        type:String,
        required:true
    },
    image:{
       name:{
        type:String,
       },
       filePath:{type:String}
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'profiles'
    }
})
useimage=new mongoose({
        image:{
                   name:{
                           type:String,
                                  },
                                         filePath:{type:String}
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
module.exports =mongoose.model('image',useimage);
module.exports= mongoose.model('Home',userhome)
module.exports = mongoose.model("profiles", userSchema);