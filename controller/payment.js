const Razorpay = require('razorpay')
const  razorpays = new Razorpay({
    key_id:'rzp_test_1RskomhcGa1lAD',
    key_secret:'bVTpXyMlMX0lsRT1l22pCX7e'
})
const payment = async(req,res)=>{
    console.log(req.body);
    const {amount,currency = "INR", receipt}= req.body;
    console.log(amount)
        const order = await razorpays.payments({
            amount:amount * 100,
            currency,
            receipt:receipt || `receipt_${Math.random().toString(36).substring(7)}`,
            payment_capture:1
        });
        res.json({
            id:order.id,
            currency:order.currency,
            amount: order.amount,
        });
   
}
module.exports = payment;