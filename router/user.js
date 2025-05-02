const  express = require('express')
const user =express.Router();
const path = require('path');
const controller = require('../controller/sign');
const homeModel = require('../models/homemodel');
user.use(express.static(path.join(__dirname,'views')));


  user.get('/user/profile',controller.profile);
  user.get('user/',async(req,res)=>{
    const homes = await homeModel.find();
    console.log('hello');
    console.log(homes);
   res.render('home',{homes});
  });
  user.get('/user/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','login.html'))
  });
  user.get('/user/logout',controller.logout);
  user.post('/user/login',controller.loginl);
  user.get('/user/signup',(req,res)=>{
  console.log("hello");
  res.sendFile(path.join(__dirname,'../views','signup.html'))
  function generatedotp(){
    return Math.floor(100000 + Math.random() * 900000); 
    }
    console.log(generatedotp());
  });
  user.post('/user/signup',controller.signup);

module.exports = user;