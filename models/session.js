 const redis = require('../config/redis')
 async function setsession(sessionid,sessiondata){
    const session = JSON.stringify(sessiondata);
   await redis.set(sessionid,session,'EX',60*60*24*7);
   console.log('redis')
   console.log(session);
}
 async function getsession(sessionid){
    console.log(sessionid);
    const session = await redis.get(sessionid);
    console.log(session);
    console.log('redis show the data of the cookies')
    if(session){
        return JSON.parse(session);
    }
    return session;
}
 async function getsessionfue(sessionid){
    console.log(sessionid);
    const session = await redis.hGetAll(sessionid);
    console.log(session);
    console.log('redis get data')
    if(session){
        return JSON.parse(session);
    }
    return session;
}
 async function setsessionfue(sessionid,sessiondata){
    const session = JSON.stringify(sessiondata);
   await redis.hSetAll(sessionid,session);
   console.log('redis')
   console.log(session);
}
module.exports = {setsession,getsession,setsessionfue,getsessionfue};