const express = require('express');
const router = express.Router();
const apiKeys = require('../configuration/config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(apiKeys.SENDGRID_API_KEY);

router.get('/',(req,res)=>{
    const msg = {
        to: ['vbvmalhotra@gmail.com','vbvrocks84@gmail.com'],
        from: 'acta.solutions@gmail.com',
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };
    sgMail.send(msg);
    res.sendStatus(200);
});

module.exports = router;
