const bcrypt = require('bcryptjs');
const User = require('../models/model');
const sendEmail =require('../utils/Otp');
const hostuser = require('../models/hostmodel')
const hosttemp = require('../models/hosttempUser');
const tempuser = require('../models/tempUser')
const homemodel = require('../models/homemodel')
const otpGenerator = require('otp-generator');
async function loginl(req, res) {
    const {email, password,business} = req.body;
    const exitbusiness = await hostuser.findOne({business:business})
    if(exitbusiness){
        console.log(req.body);
        const hostUser = await hostuser.findOne({email: email});
        if(!user) return res.status(401).send('invalid email/password');
        const ismatch = await user.comparePassword(password);
        if(!ismatch) return res.status(401).send('invalid email/password');
        res.cookie('token', user, {
            httpOnly: true,
            secure: 'my key secret',
            maxAge: 30*24*60*60*1000,
        });
        res.cookie('isloggin',true)
      console.log(user);
       req.session.user={
        id:user._id,
        email:user.email,
       }
       req.session.save();
        res.redirect('/');
    }else{
        console.log(req.body);
        const user = await User.findOne({email: email});
        if(!user) return res.status(401).send('invalid email/password');
        const ismatch = await user.comparePassword(password);
        if(!ismatch) return res.status(401).send('invalid email/password');
        res.cookie('token', user, {
            httpOnly: true,
            secure: 'my key secret',
            maxAge: 30*24*60*60*1000,
        });
        res.cookie('isloggin',true)
      console.log(user);
       req.session.user={
        id:user._id,
        email:user.email,
       }
       req.session.save();
        res.redirect('/');
    }
   
}
const auth = async(req,res)=>{
  const {id,otp}= req.body
  const hostid = await hosttemp.findOne({id})
  const userid = await tempuser.findOne({id})
  if(hostid){
  const hostdataupdate = await hosttemp.updateOne({isverified:true})

  const hostsave = await hosttemp.find({id});
  console.log(hostsave);
          req.session.isverified = {
           id:id,
            isverified: true,
          }
          console.log('say')
          res.redirect('/host/')
    
  }
}

   

const signup = async(req, res) => {
    console.log(req.body);    
    const {email, password,firstname,lastname,business,Otp} = req.body;
 let count = 1;
 let id = Date.now() + count++
    console.log(req.body);
    console.log(firstname,lastname,email,password,);
    if(business){
        console.log(business)
        let exithost = await hostuser.findOne({email})
        if(exithost) {
            return res.send("email already exists");
        }
        const otp = otpGenerator.generate(6, { 
            upperCase: false, 
            specialChars: false, 
            alphabets: false 
          });
             
        sendEmail(email,otp);
        otpExpires = new Date(Date.now() + 60*10*1000);
        const hostUser = new hosttemp({email,password,business,id,otp,otpExpires });
        console.log(email,password,business,id,otp,otpExpires )
        hostUser.save();
        res.render('hostotp.ejs',{id})
    }else{
        let exituser = await User.findOne({email});
        if(exituser) {
            return res.send("email already exists");
        }
        function generatedid(){
            return 1000 + Math.floor(Math.random * 8000000)
        }
        const otp = otpGenerator.generate(6, { 
            upperCase: false, 
            specialChars: false, 
            alphabets: false 
          });
        sendEmail(email,otp);
       
        otpExpires = Date.now*60*10*1000;
        const id = generatedid();
        const user = new tempuser({email,password,id,otp,otpExpires});
        await user.save();
        res.render('otp.ejs',{id})
    }
  
};
async function profile(req,res){
 if(req.session.user == null){
  return res.status(401).send('please login first');
 }else{
  console.log('hello');
  const userid =User.findOne({email: req.session.user.email});
  console.log(userid);
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

