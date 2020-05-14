var express = require('express');
var router = express.Router();
var Posts = require('../models/posts');
var nodemailer = require('nodemailer');

/* GET home page. */


router.get('/', function(req, res, next){
  res.render('index', {title: 'express'})
}),



router.post('/', (req, res) => {

  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.gmail,
      pass: process.env.password
    },
    tls:{
      rejectUnauthorized: false
  }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'HSX DIGITAL SOLUTION', // This is ignored by Gmail
    to: `${req.body.email}`,
    subject: 'HSX DIGITAL SOLUTION',
    text: `Dear, ${req.body.name} You've Taken a Great Step In Your Self Development Journey. Kindly Join the Telegram Workspace with the below link.
https://www.t.me/hsxdigitals
    
Alternative: search hsxdigitals channel on telegram
    
Hassan.  `
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
     console.log(error) // Show a page indicating failure
    }
    else {
      
     res.redirect('/emailsent') // Show a page indicating success
     console.log('sent')
    }
  })
})


module.exports = router;
