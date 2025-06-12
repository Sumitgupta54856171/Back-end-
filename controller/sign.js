const bcrypt = require('bcryptjs');
const sendEmail =require('../utils/Otp');
const hosttemp = require('../models/hosttempUser');
const homemodel = require('../models/homemodel')
const {setsession,getsession}  = require('../models/session')
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');
const { CancellationToken } = require('mongodb');
async function loginl(req, res) {
    const {email, password,role} = req.body;
    const jwts = process.env.jwt_sceret;
    if(role == "business"){
    console.log(req.body);
    console.log('user')
    const user = await hosttemp.findOne({email: email});
    if(!user) return res.status(401).send('inval email/password');
    const ismatch = await user.comparePassword(password);
    if(!ismatch) return res.status(401).send('inval email/password');
   payload ={
    role:user.role,
    email:user.email,
   };
    const token = jwt.sign(payload,jwts,{expiresIn:24*60 *60*100})
  console.log(user);
  setsession(user.email,payload)
  res.cookie('session',token, {
    httpOnly: true,
    secure: process.env.jwt_sceret,
    maxAge: 30*24*60*60*1000,
});
 res.redirect('/host/')
  }else{
        console.log(req.body);
        console.log('user')
        const user = await hosttemp.findOne({email: email});
        if(!user) return res.status(401).send('inval email/password');
        
        const ismatch = await user.comparePassword(password);
        if(!ismatch) return res.status(401).send('inval email/password');
       payload ={
        role:user.role,
        email:user.email,
       }
        const token = jwt.sign(payload,jwts,{expiresIn:24*60 *60*100})
      console.log(user);
      setsession(user.email,payload)
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.jwt_sceret,
        maxAge: 30*24*60*60*1000,
    });
     res.redirect('/user/')
    }
   
}
const auth = async(req,res)=>{
  const {otp,role}= req.body
   const cook = req.cookies.email;
   console.log(cook)
   console.log('cookies is data')
   const cooks = getsession(cook);
   console.log('step on')
  console.log(cooks)
    console.log('user')
    if(cooks){
        console.log('user1')
    const users = await hosttemp.findOne({email:cook});
    if(!users) return res.status(401).send('inval email/password');
    if(users.otp == otp){
  const hostdataupdate = await hosttemp.findByIdAndUpdate({_id:users._id},{$set:{isverified:true}});
   console.log(hostdataupdate);
          console.log('say')
          res.redirect('/login');
    }
    }else{
        res.redirect('/otp')
    }
  
  
}
    

const signup = async(req, res) => {
    console.log(req.body);    
    const {email, password,username,role} = req.body;

    console.log(req.body);
    console.log(username,email,password,role);
    if(role === "business"){
        console.log(role)
        let exithost = await hosttemp.findOne({email})
        if(exithost) {
            return res.send("email already exists");
        }
        const otp = otpGenerator.generate(6, { 
            upperCase: false, 
            specialChars: false, 
            alphabets: false 
          });
        console.log(req.body);
        sendEmail(email,otp);
        otpExpires = new Date(Date.now() + 60*10*1000);
        const hosttemps = new hosttemp({email,password,role,otp,otpExpires,username});
        console.log(email,password,role,otp,otpExpires,username)
        hosttemps.save();
        res.cookie('email',email,{
            httpOnly: true,
            secure: process.env.jwt_sceret,
            maxAge: 60*60*1000,
        })
        const userredis  = {
            email:email,
            role:role,
            otp:otp,
        }
   setsession(email,userredis)
        res.redirect('/otp')
    }else{
        let exithost = await hosttemp.findOne({email});
        if(exithost) {
            return res.send("email already exists");
        }
        const otp = otpGenerator.generate(6, { 
            upperCase: false, 
            specialChars: false, 
            alphabets: false,
            numbers: true 
          });
             
        sendEmail(email,otp);
        otpExpires = new Date(Date.now() + 60*10*1000);
        const hosttemps = new hosttemp({email,password,role,otp,otpExpires,username });
        console.log(email,password,role,otp,otpExpires,username )
        hosttemps.save()
          res.cookie('email',email,{
            httpOnly: true,
            secure: process.env.jwt_sceret,
            maxAge: 60*60*1000,
        })
        const userredis={
            email:email,
            role:role,
            otp:otp
        }

        setsession(email,userredis)
       res.redirect('/otp')
    }
};
async function profile(req,res){
    if(req.user.role === 'business'){
        const userid = await hosttemp.findOne({email:req.user.email})
        res.render('profile',{userid});
    }else{
        const userid = await hosttemp.findOne({email:req.user.email})
        res.render('profile',{userid});
    }

}

async function logout(req, res) {   
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send('Error logging out');
        }
        res.clearCookie('token');
        res.redirect('/');
    });
}
module.exports = {
    loginl,
    signup,
    profile,
    logout ,
    auth,
};

