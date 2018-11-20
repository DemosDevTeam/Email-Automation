const config = require('../configuration/config');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(config.SENDGRID_API_KEY);

module.exports = {
    sendEmail: (usersList,done)=>{
        const msg = {
            to: usersList,
            from: 'acta.solutions@gmail.com',
            subject: 'Sending with SendGrid is Fun',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        };
        sgMail.send(msg);
        done();
    }
};
