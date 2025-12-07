// Corrected (Sudhara Hua) Code
const Razorpay = require('razorpay');

// 'razorpay' variable name ab theek hai
const razorpay = new Razorpay({
    // Keys bilkul sahi format mein hain
    key_id:process.env.key_id, 
    key_secret: process.env.key_secret
});

// module.exports (s' ke saath) is the correct way to export in Node.js
module.exports = razorpay;