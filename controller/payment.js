const Razorpay = require('razorpay')
const crypto = require('crypto');
const razorpays = new Razorpay({
    key_id: process.env.key,
    key_secret: process.env.key_secret
})

const payment = async(req,res)=>{
    console.log(req.body);
    const {amount,currency = "INR", receipt}= req.body;
    console.log(amount)
        const order = await razorpays.orders.create({
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
        console.log(order);
}

const verifyPayment = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            bookingId
        } = req.body;

        // Create the signature body
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        // Create expected signature
        const expectedSignature = crypto
            .createHmac("sha256", process.env.key_secret)
            .update(body.toString())
            .digest("hex");

        // Compare signatures
        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {
            // Payment is successful and verified
            // Here you can update your database with the payment status
            // For example, update the booking status to 'confirmed'
            
            res.json({
                verified: true,
                message: "Payment verified successfully"
            });
        } else {
            res.status(400).json({
                verified: false,
                message: "Payment verification failed"
            });
        }
    } catch (error) {
        console.error("Payment verification error:", error);
        res.status(500).json({
            verified: false,
            message: "Error verifying payment",
            error: error.message
        });
    }
};

module.exports = { payment, verifyPayment };