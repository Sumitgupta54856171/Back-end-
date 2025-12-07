const express = require('express');
const path = require('path');
const host = express.Router();
const controller = require('../controller/sign');
const upload = require('../controller/upload');
const homeModel = require('../models/add');
const homecontroller = require('../controller/home');
const session = require('express-session');
const passport =require('passport')
const MongoStore = require('connect-mongo')
const mongo = require('../config/mongoose')
const jwtcontroller = require('../middleware/jwts');
const cookieParser = require('cookie-parser');
host.use(express.static(path.join(__dirname,'/views')));
host.use((req,res,next)=>{
  mongo;
  next();
});
host.use(express.static(path.join(__dirname,'../views')));
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
  res.locals.isLoggedIn = req.user.email ? true : false;
  res.locals.user = req.user || null;
  next();
})
host.get('/homeadd',(req,res)=>{
    res.sendFile(path.join(__dirname,'../views','home_add.html'));
  })
  host.get('/transtion',(req,res)=>{
    res.render('transtion')
  })
  host.post('/homeadd',upload.single('image'),homecontroller.home_add);
  host.get('/profile',controller.profile);
  host.get('/hostotp',(req,res)=>{
    res.sendFile(path.join(__dirname,'..views','hostotp.html'))
  })
  host.get('/',async(req,res)=>{
    console.log('host home is SharedWorker',req.user.email)
  if(req.user.role == "business"){
    const homes = await homeModel.find({email:req.user.email});
    console.log('hello');
    console.log(homes);
   res.render('hosthome',{homes});
  }
  });
  host.post('/auth',controller.auth);
  host.get('/logout',controller.logout);
  module.exports = host;
