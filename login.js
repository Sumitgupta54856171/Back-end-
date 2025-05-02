const cookieParser = require('cookie-parser');
require('dotenv').config();
const express = require('express');
const app =express();
const ejs = require('ejs');
const client = require('./models/mongoose');
const path= require("path");
const bodyParser= require('body-parser');
const multer=require('multer');
const host = require('./router/host');
const user = require('./router/user');
const session = require('express-session');
const homeModel = require('./models/homemodel');
const { OAuth2Client } = require('google-auth-library');
const {google} = require('googleapis');
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret:'completely secreet',
  resave:false,
  saveUninitialized:true,
  store: new session.MemoryStore(),
  rolling:true,
  cookie: { secure: false,maxAge:24 * 60 * 60 * 1000 }
}));
console.log( process.env.google_client_id, process.env.google_secret,process.env.google_redirect)
app.use(express.static(path.join(__dirname,'views')));
app.use((req,res,next)=>{
  res.locals.isLoggedIn = req.session.user ? true : false;
  res.locals.user = req.session.user || null;
  res.locals.isVerified = req.session.isVerified ? true :false
  next();
})
app.get('/',async(req,res)=>{
  const homes = await homeModel.find();
  console.log('hello');
  console.log(homes);
 res.render('home',{homes});
});
app.use(host);
app.use(user);
const port =process.env.port;
app.listen(port,()=>{
    console.log(`server is running ${port}`)
    client();
});
