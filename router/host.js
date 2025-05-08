const express = require('express');
const path = require('path');
const host = express.Router();
const controller = require('../controller/sign');
const upload = require('../controller/upload');
const homeModel = require('../models/homemodel');
const homecontroller = require('../controller/home');
const session = require('express-session');
const passport =require('passport')
const MongoStore = require('connect-mongo')
const mongo = require('../models/mongoose')
const jwtcontroller = require('../middleware/jwt2');
const cookieParser = require('cookie-parser');
host.use((req,res,next)=>{
  mongo;
  next();
});
host.use(jwtcontroller);
host.use(passport.initialize());
host.use(passport.session());
host.use(cookieParser())
host.use(session({
  secret: 'my-secret-key',
  resave: true,
  saveUninitialized: false,
  store: MongoStore.create({ 
      mongoUrl: 'mongodb://localhost:27017/sessionDB',
      collectionName: 'sessions',
      ttl: 24 * 60 * 60 
  }),
  cookie: { 
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false
}
}));

host.use((req,res,next)=>{
  res.locals.isLoggedIn = req.user.user ? true : false;
  res.locals.user = req.user || null;
  next();
})
host.use((req, res, next) => {
  console.log('Session:', req.session);
  next();
})

host.get('/homeadd',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','home_add.html'));
  })
  host.post('/homeadd',upload.single('image'),homecontroller.home_add);
  host.get('/profile',controller.profile);

  host.get('/',async(req,res)=>{
    const homes = await homeModel.find({email:req.user.payload.email});
    console.log('hello');
    console.log(req.user.payload)
    console.log(homes);
   res.render('hosthome',{homes});
  });
  host.post('/auth',controller.auth);
  host.get('/logout',controller.logout);
  module.exports = host;
