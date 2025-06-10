const  express = require('express')
const user =express.Router();
const path = require('path');
const controller = require('../controller/sign');
const homeModel = require('../models/homemodel');
const session = require('express-session')
const MongoStore =require('connect-mongo');
const mongoose = require('../config/mongoose');
const mongo = require('../config/mongoose')
const cookieParser = require('cookie-parser');
const jwtcontroller = require('../middleware/jwt')
 const housecontorller =require('../controller/housebook')
 const payment = require('../controller/payment')
user.use((req,res,next)=>{
  mongo();
  next();
});
user.use(express.static(path.join(__dirname,'../views')));
user.use(cookieParser())
user.use(jwtcontroller);
user.use(session({
  secret: process.env.jwt_sceret,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ 
      mongoUrl: 'mongodb://localhost:27017/sessionDB'
  }),
  cookie: { maxAge: 1000 * 60 * 60 }
}));
user.use((req,res,next)=>{
  res.locals.isLoggedIn = req.user.email ? true : false;
  res.locals.user = req.user || null;
  next();
})
user.post('/payment',payment)
  user.get('/profile',controller.profile);
  user.get('/',async(req,res)=>{
    const homes = await homeModel.find();
    console.log(homes);
   res.render('home',{homes});
  });
  user.get('/otp',(req,res)=>{
  res.sendFile(path.join(__dirname,'../views','opt.html'))
  });
 user.post('/auth',controller.auth)
 user.post('/book',housecontorller.housebook);
 user.get('/book',(req,res)=>{
  res.render('book')
 })
 user.get('/productdetail',(req,res)=>{
 res.sendFile(path.join(__dirname,'../views','homedetail.html'))
 })
  user.get('/logout',controller.logout);
  user.get('/signup',(req,res)=>{
  console.log("hello");
  res.sendFile(path.join(__dirname,'../views','signup.html'))
  });
  user.post('/signup',controller.signup);

module.exports = user;