const mongoose =require('mongoose');
module.exports = function db(){
    mongoose.connect(process.env.mongodb_url)
    .then(()=>{
        console.log("mongodb is a connected")
    })
    .catch((err)=>{
    console.log(err)
    });
} 

