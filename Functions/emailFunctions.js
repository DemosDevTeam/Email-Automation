const config = require('../configuration/config');
const sgMail = require('@sendgrid/mail');
const hogan = require('hogan.js');
const fs = require('fs');
const template = fs.readFileSync('./emailTemplates/email.html','utf-8');
const compiledTemplate = hogan.compile(template);

sgMail.setApiKey(config.SENDGRID_API_KEY);

module.exports = {
    sendEmail: (usersList,contentCategories,done)=>{
        let obj = JSON.stringify(contentCategories);
        const msg = {
            to: usersList,
            from: 'acta.solutions@gmail.com',
            subject: 'Sending with SendGrid is Fun',
            html: compiledTemplate.render({cityContentData: obj})
        };
        sgMail.send(msg);
        done();
    }
};
