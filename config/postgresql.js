const {Client} = require('pg');
const client = new Client({
user:process.env.postgres,
host:process.env.localhost,
database:process.env.database,
password:process.env.postpasswd,
port:5432,
})
client.connect()
.then(()=>{
    console.log("postgres is connected")
})
.catch((err)=>{
    console.log(err)
})
module.exports = client;