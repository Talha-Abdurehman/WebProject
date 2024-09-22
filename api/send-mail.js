const nodemailer = require('nodemailer');
const Imap = require('imap');
const { simpleParser } = require('mailparser');
require('dotenv').config();

module.exports = async (req, res) => {
  const { email, message, username, phone } = req.body;

  if (!email || !message) {
    return res.status(400).send('Email and message are required');
  }

  try {
    await sendEmailAndAppend(email, message, username, phone);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
};

async function sendEmailAndAppend(recipientEmail, message, username, phone) {
  // Set up your nodemailer transporter and send email logic as before
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:587,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: recipientEmail,
    subject: 'Thank You For Reaching Out',
    text: 
    `Hi ${username},
    
    This is to inform you that I have recieved your Message.`,
  };

  await transporter.sendMail(mailOptions);
  console.log('Email sent successfully.');

  // Append the email to the "Sent" folder (optional)
  // Your IMAP logic here...
}
