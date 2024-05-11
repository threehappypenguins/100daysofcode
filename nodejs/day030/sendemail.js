const transporter = require('./transporter');
require('dotenv').config();

// Create email message options
const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: 'Test email from Node.js',
    text: 'Hello, this is a test email sent from a Node.js application using Nodemailer!',
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error sending email:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});