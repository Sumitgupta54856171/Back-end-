const nodemailer= require('nodemailer');
const sendEmail=async(email,otp)=>{
   
        const transport = nodemailer.createTransport({
           service:'gmail',
           host: 'smtp.gmail.com',
       port: 587,
        secure: false,
            auth:{
            user:'guptaashish2531@gmail.com',
            pass:'7$Ashish',
            }
        })
        const mailOptions ={
            from:'guptaashish2531@gmail.com',
            to:email,
            subject:'otp send by airbnb',
            text:`this otp send by airbnb otp ${otp}`
        }
        await transport.sendMail(mailOptions);
}
module.exports=sendEmail;
                
