const nodemailer = require('nodemailer');
const { EMAIL_RECEIVER } = require('../config');

const sendEnquiry = async (req, res) => {
  const { itemId, itemName } = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: 'minakanupanchal@gmail.com  ',
    subject: `Enquiry for Item: ${itemName}`,
    text: `User enquired about item: ${itemName} (ID: ${itemId})`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) return res.status(500).send(error.toString());
    res.send('Enquiry sent successfully');
  });
};

module.exports = { sendEnquiry };
