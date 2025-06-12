const redis  = require('redis');
const reid = new redis.createClient({
    socket:{
        host:'127.0.0.1',
        port:'6379',
        db:3
    }
})
reid.connect()
.then(()=>{
    console.log("redis is connected")
})
.catch((err)=>{
    console.log(err)
})
module.exports = reid;