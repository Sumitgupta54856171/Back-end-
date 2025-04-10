const cookieParser = require('cookie-parser');
const express = require('express');
const app =express();
const ejs = require('ejs');
const client = require('./models/mongoose');
const path= require("path");
const model = require('./models/model');
const bodyParser= require('body-parser');
const controller = require('./controller/sign');
const multer=require('multer');
const bcrypt= require('bcryptjs');
const homecontroller = require('./controller/home');
const session = require('express-session');
const homeModel = require('./models/homemodel');
const storge =multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads/');
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now() + path.extname(file.originalname));
  }});
  const upload =multer({storage:storge});
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
app.use(async(req,res,next)=>{

  next();
})
app.use(express.static(path.join(__dirname,'views')));
app.use((req,res,next)=>{
  res.locals.isLoggedIn = req.session.user ? true : false;
  res.locals.user = req.session.user || null;
  next();
})
app.get('/homeadd',(req,res)=>{
  res.sendFile(path.join(__dirname,'views','home_add.html'));
})
app.post('/homeadd',upload.single('image'),homecontroller.home_add);

app.get('/profile',controller.profile);
app.get('/',async(req,res)=>{
  const homes = await homeModel.find();
  console.log(homes);
 res.render('home',{homes});
});
app.get('/login',(req,res)=>{
  res.sendFile(path.join(__dirname,'views','login.html'))
});
app.get('/logout',controller.logout);
app.post('/login',controller.loginl);
app.get('/signup',(req,res)=>{
console.log("hello");
res.sendFile(path.join(__dirname,'views','signup.html'))
});
app.post('/signup',controller.signup);
const port =3000;
app.listen(port,()=>{
    console.log(`server is running ${port}`)
    client();
});