const bcrypt = require('bcryptjs');
const sendEmail =require('../utils/Otp');
const hosttemp = require('../models/hosttempUser');
const homemodel = require('../models/homemodel')
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');
const { CancellationToken } = require('mongodb');
async function loginl(req, res) {
    const {email, password,role} = req.body;
    console.log(role)
   const jwts = process.env.jwt_sceret
    if(role === "business"){
        const user = await hosttemp.findOne({email: email});
        if(!user) return res.status(401).send('invalid email/password');
        const ismatch = await user.comparePassword(password);
        if(!ismatch) return res.status(401).send('invalid email/password');
        payload= {
            role:user.role,
            id:user.id,
            email:user.email,
        }
        const hosttoken = jwt.sign({
            payload},jwts,{expiresIn:'1h'})
            console.log(hosttoken)
        res.cookie('token',hosttoken, {
            httpOnly: true,
            secure: 'my key secret',
            maxAge: 30*24*60*60*1000,
        });
       res.redirect('/host/')
       
    }else{
        console.log(req.body);
        console.log('user')
        const user = await hosttemp.findOne({email: email});
        if(!user) return res.status(401).send('invalid email/password');
        const ismatch = await user.comparePassword(password);
        if(!ismatch) return res.status(401).send('invalid email/password');
       payload ={
        role:user.role,
        id:user.id,
        email:user.email,
       }
        const token = jwt.sign(payload,jwts,{expiresIn:24*60 *60*100})
            req.session.token = token
        req.session.save();
      console.log(user);
      req.session.isLoging = true;
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.jwt_sceret,
        maxAge: 30*24*60*60*1000,
    });
     res.redirect('/user/')
    }
   
}
const auth = async(req,res)=>{
  const {id,otp,role}= req.body
  if(role === "business"){
  const hostdataupdate = await hosttemp.findOneAndUpdate({id:id ,isverified:true})
  const hostsave = await hosttemp.find({id});
  console.log(hostsave);
          console.log('say')
          res.redirect('/login')
  }else{
    const hostdataupdate = await hosttemp.findOneAndUpdate({id:id,isverified:true})
  const hostsave = await hosttemp.find({id});
  console.log(hostsave);
     
          console.log('say')
          res.redirect('/login')
  }
}
    

const signup = async(req, res) => {
    console.log(req.body);    
    const {email, password,username,role} = req.body;
 let count = 1;
 let id = Date.now() + count++
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
        const hosttemps = new hosttemp({email,password,role,id,otp,otpExpires,username});
        console.log(email,password,role,id,otp,otpExpires,username)
        hosttemps.save();
        res.render('hostotp.ejs',{id})
    }else{
        let exithost = await hosttemp.findOne({email})
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
        const hosttemps = new hosttemp({email,password,role,id,otp,otpExpires,username });
        console.log(email,password,role,id,otp,otpExpires,username )
        hosttemps.save();
        res.render('hostotp.ejs',{id})
    }
};
async function profile(req,res){
    if(req.user.email || req.user.email === 'undefined' || null ){
        const userid = await hosttemp.findOne({email:req.user.email})
        res.render('profile',{userid});
    }else{
        const userid = await hosttemp.findOne({email:req.user.payload.email})
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

