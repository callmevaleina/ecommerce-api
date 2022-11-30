const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "valentina.crms@gmail.com",
      pass: process.env.G_PASSWORD,
}
});

module.exports = transporter;

