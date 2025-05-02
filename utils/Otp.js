const nodemailer = require('nodemailer');



async function sendEmail (email, otp){
   
        const transport = nodemailer.createTransport({
            service: 'gmail',
            port:465,
            secure:false,
            auth: {
               user:process.env.email,
               pass:'ntkf ygea lqgo wzjb'
            }
        });

        const mailOptions = {
            from: process.env.email,
            to: email,
            subject: 'OTP from Airbnb',
            text: `Your OTP for Airbnb verification is: ${otp}`
        };

        await transport.sendMail(mailOptions);
        return true;
        } 

module.exports = sendEmail;
                
