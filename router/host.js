const express = require('express');
const path = require('path');
const host = express.Router();
const controller = require('../controller/sign');
const upload = require('../controller/upload');
const homeModel = require('../models/homemodel');
const homecontroller = require('../controller/home');
host.use(express.static(path.join(__dirname,'../views')));
host.get('/host/homeadd',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','home_add.html'));
  })
  host.post('/host/homeadd',upload.single('image'),homecontroller.home_add);
  
  host.get('/host/profile',controller.profile);
  host.get('/host/',async(req,res)=>{
    const homes = await homeModel.find();
    console.log('hello');
    console.log(homes);
   res.render('home',{homes});
  });
  host.post('/host/auth',controller.auth);
  host.get('/host/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','login.html'))
  });
  host.get('/host/logout',controller.logout);
  host.post('/host/login',controller.loginl);
  host.get('/host/signup',(req,res)=>{
  console.log("hello");
  res.sendFile(path.join(__dirname,'../views','hostsignup.html'))
  });
  host.post('/host/signup',controller.signup);
  module.exports = host;
