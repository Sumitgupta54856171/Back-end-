const mongoose =require('mongoose');

const homeSigma =new mongoose.Schema({
    homename:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    state:{
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

});
module.exports = mongoose.model('home',homeSigma);