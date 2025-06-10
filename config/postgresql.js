const {Client} = require('pg');
const client = new Client({
user:'postgres',
host:'localhost',
database:'postgres',
password:'12345687',
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