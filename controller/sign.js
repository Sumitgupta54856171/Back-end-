const bcrypt = require('bcrypt');
const User = require('../models/model');
const cookieParser = require('cookie-parser');
const session = require('express-session');

async function loginl(req, res) {
    const {email, password} = req.body;
    console.log(req.body);
    const user = await User.findOne({email: email});
    if(!user) return res.status(401).send('invalid email/password');
    const ismatch = await user.comparePassword(password);
    if(!ismatch) return res.status(401).send('invalid email/password');
    res.cookie('token', user.id, {
        httpOnly: true,
        secure: 'my key secret',
        maxAge: 30*24*60*60*1000,
    });
    res.cookie('isloggin',true)
  req.session.user =user.id;
   
    res.redirect('/');
}
const signup = async(req, res) => {
    console.log(req.body);    
    const {email, password,firstname,lastname} = req.body;
    let exituser = await User.findOne({email});
    if(exituser) {
        return res.send("email already exists");
    }
    console.log(req.body);
    console.log(firstname,lastname,email,password,);
   const user = new User({email,password});
    await user.save();
    res.redirect('/login');
};
async function profile(req,res){
 
  const user = await User.findById(req.session.user._id);
  if(!user) return res.status(401).send('invalid email/password');
  res.render('profile', {user});    
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
    logout 
};