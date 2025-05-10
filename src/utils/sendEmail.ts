import nodemailer from "nodemailer";



export const sendEmail = async(emailData:{email:string,name:string,message:string,phone:string})=>{

    const {email,name,message,phone} = emailData;
    const transporter = nodemailer.createTransport({
        host: process.env.HOST || '',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER, // generated ethereal user
          pass: process.env.EMAIL_PASS, // generated ethereal password
        },
        tls: {
          rejectUnauthorized: false
        }
      });
    
    await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_USER,
        subject: `New message from ${name} - ${phone}`,
        text: message
    })

}