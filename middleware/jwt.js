const jwt = require('jsonwebtoken')
function verifytoken(req,res,next){
const token = req.cookies.token;
    console.log(token)
    if(!token){
        return res.status(401).json({error:'No token provided'})
    }
    try{
        const decoded = jwt.verify(token,process.env.jwt_sceret);
        console.log(decoded)
        req.user = decoded
        next();
    }catch(error){
        res.status(401).json({error:'Invalid token'})
    }
    
};
module.exports = verifytoken;