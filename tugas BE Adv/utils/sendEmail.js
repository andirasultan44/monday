const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (email, token) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // email kamu
      pass: process.env.EMAIL_PASS  // app password
    }
  });

  const link = `http://localhost:3000/api/verify-email?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verifikasi Email Anda",
    text: `Klik link berikut untuk verifikasi akun Anda: ${link}`
  });
};

module.exports = sendEmail;
