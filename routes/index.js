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
      user: 'jacksas540@gmail.com',
      pass: 'hasyjay22'
    },
    tls:{
      rejectUnauthorized: false
  }
  })

  // Specify what the email will look like
  const mailOpts = {
    from: 'Your sender info here', // This is ignored by Gmail
    to: 'jacksas540@gmail.com',
    subject: 'New message from contact form at hsxdigitals.tech',
    text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
  }

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
     console.log(error) // Show a page indicating failure
    }
    else {
      
     res.redirect('/') // Show a page indicating success
     alert('sent')
    }
  })
})


module.exports = router;
