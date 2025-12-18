const cookieParser = require('cookie-parser');
require('dotenv').config();
const express = require('express');
const app =express();
const ejs = require('ejs');
const client = require('./config/mongoose');
const path= require("path");
const reid = require('./config/redis')
const bodyParser= require('body-parser');
const host = require('./router/host');
const user = require('./router/user');
const session = require('express-session');
const homeModel = require('./models/add');
const { OAuth2Client } = require('google-auth-library');
const {google} = require('googleapis');
const controller = require('./controller/sign');
const { appendFile } = require('fs');
const userauth = require('./models/oauth');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
app.use('/uploads', express.static(path.join(__dirname,'uploads')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', './views');
const cors = require('cors');
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:"http://localhost:5173"
}));
app.use(session({
  secret:'completely secreet',
  resave:false,
  saveUninitialized:false,
  store: new session.MemoryStore(),
  rolling:true,
  cookie: { secure: false,maxAge:24 * 60 * 60 * 1000 }
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new GoogleStrategy({
  clientID: process.env.client_id,
  clientSecret: process.env.client_secret,
  callbackURL: "/auth/google/callback"
},async(accessToken,refreshToken,profile,done)=>{
  try{
let exist = await userauth.findOne({googleId:profile.id})
if(exist){
  return done(null,exist)
}else{
  const newuser = await new userauth({
    googleId:profile.id,
    displayName:profile.displayName,
    imageUrl:profile.photos[0].value,
    email:profile.emails[0].value
  }).save();
  return done(null,newuser);
 
}
  }catch(error){
    console.log(error);
    return done(error,false)
  }
}))
passport.serializeUser((user, done) => {
 
  done(null, user.id || user._id); 
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await userauth.findById(id);
    done(null, user); 
  } catch (err) {
    done(err, null);
  }
});

app.use('/user',user);
app.use('/host',host);

app.use(express.static(path.join(__dirname,'/views')));

app.use(express.static(path.join(__dirname,'views')));
app.use((req,res,next)=>{
  res.locals.isLoggedIn = req.session.isLoging ? true : false;
  res.locals.user = req.user || null;
  next();
});

app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}))
app.get("/auth/google/callback",passport.authenticate("google",{failureRedirect:"/login"}),async(req,res)=>{
 
  res.redirect("http://localhost:5173/");
})

app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname,'views','login.html'));
})
app.post('/login',controller.loginl);
app.get('/',async(req,res)=>{
  const homes = await homeModel.find();
  console.log('hello');
  console.log(homes);
 res.render('home',{homes});
});
app.get('/signup',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views','signup.html'))
});
app.get('/otp',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views','opt.html'))
});
app.post('/auth',controller.auth);
app.post('/signup',controller.signup);
const port =process.env.port;
app.listen(port,()=>{
    console.log(`server is running ${port}`)
    client();
    reid;
    
});
