const Razorpay = require('razorpay');
const razorpays = new Razorpay({
    key_id: process.env.key,
    key_secret: process.env.key_secret
})
module.exports = razorpays;