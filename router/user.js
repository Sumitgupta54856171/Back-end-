const  express = require('express')
const user =express.Router();
const path = require('path');
const controller = require('../controller/sign');
const homeModel = require('../models/homemodel');
const session = require('express-session')
const MongoStore =require('connect-mongo');
const mongoose = require('../models/mongoose');
const mongo = require('../models/mongoose')
const cookieParser = require('cookie-parser');
const jwtcontroller = require('../middleware/jwt')
 const housecontorller =require('../controller/housebook')
user.use((req,res,next)=>{
  mongo;
  next();
});
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
  res.locals.isLoggedIn = req.session.isLoging ? true : false;
  res.locals.user = req.user || null;
  next();
})

  user.get('/profile',controller.profile);
  user.get('/',async(req,res)=>{
    const homes = await homeModel.find();
    console.log('hello');
    console.log(req.user.payload)
    console.log("hello")
    console.log(req.user)
    console.log(homes);
   res.render('home',{homes});
  });
 user.post('/auth',controller.auth)
 user.post('/book',housecontorller.housebook);
 user.get('/book',(req,res)=>{
  res.render('book')
 })
  user.get('/logout',controller.logout);
  user.get('/signup',(req,res)=>{
  console.log("hello");
  res.sendFile(path.join(__dirname,'../views','signup.html'))
  });
  user.post('/signup',controller.signup);

module.exports = user;