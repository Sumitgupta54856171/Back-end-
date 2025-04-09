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
const bcrypt= require('bcrypt')
const session = require('express-session');
const storge =multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'uploads/');
  },
  filename:(req,file,cb)=>{
    cb(null,Date.now() + path.extname(file.originalname));
  }});
  const upload =multer({storage:storge});
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
  cookie: { secure: false }
}));
app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join))
app.use((req,res,next)=>{
  res.locals.isLoggedIn = req.session.user ? true : false;
  res.locals.user = req.session.user || null;
  next();
})
app.post('/upload',upload.single('image'),(req,res)=>{
  const file = req.file;
  const image = {
    name: file.originalname,
    filePath: file.path
  };
  const userId = req.session.user._id;
  const newImage = new model({ image, userId });
  newImage.save()
    .then(() => {
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error saving image');
    });
});
app.get('/profile',controller.profile);
app.get('/',(req,res)=>{
 res.render('home');
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