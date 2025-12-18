const jwt = require('jsonwebtoken')
const {getsession} =require('../models/session')
function verifytoken(req,res,next){
const token = req.cookies.token;
    console.log(token)
    if(!token){
        return res.status(401).json({error:'No token provided'})
    }
        const decoded = jwt.verify(token,process.env.jwt_sceret);
        console.log('decoded')
        console.log(decoded)
        console.log(decoded.email)
        getsession(decoded.email)
        console.log('sesssion')
        if(!decoded){
            return res.status(401).json({error:'Invalid token'})
        }
        console.log("the data of session is fetch",decoded)
        res.json(decoded,{message:"this is authenticated"},{isverfied:true})
        next();
};
module.exports = verifytoken;