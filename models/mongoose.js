const mongoose =require('mongoose');
module.exports = function db(){
    mongoose.connect("mongodb+srv://guptaashish2531:12345687@cluster0.ydgkg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{
        console.log("mongodb is a connected")
    })
    .catch((err)=>{
    console.log(err)
    });
} 

