const config = require('../configuration/config');
const sgMail = require('@sendgrid/mail');
const hogan = require('hogan.js');
const fs = require('fs');
const template = fs.readFileSync('./emailTemplates/email.html','utf-8');
const compiledTemplate = hogan.compile(template);
const sortContent = require('../util/sortContent');

sgMail.setApiKey(config.SENDGRID_API_KEY);

module.exports = {
    sendEmail: (usersList,contentCategories,city,state,done)=>{
        for(let i=0; i<usersList.length; i++){
            let obj = contentCategories //JSON.stringify(contentCategories);
            //add state and city to every piece of content in this set of contentCategories for navigation puposes
            obj.events.forEach((content) => {
                content.feedbackLink = "http://localhost:4200/feedback/" + encodeURI(state) + "/" + encodeURI(city) + "/" + encodeURI(contentCategories.dateToBeCreated) + "/" + encodeURI(content.title) + "/" + encodeURI(usersList[i].email);
            })
    
            obj.councilMeetingUpdates.forEach((content) => {
                content.feedbackLink = "http://localhost:4200/feedback/" + encodeURI(state) + "/" + encodeURI(city) + "/" + encodeURI(contentCategories.dateToBeCreated) + "/" + encodeURI(content.title) + "/" + encodeURI(usersList[i].email);
            })
    
            obj.townInTheNews.forEach((content) => {
                content.feedbackLink = "http://localhost:4200/feedback/" + encodeURI(state) + "/" + encodeURI(city) + "/" + encodeURI(contentCategories.dateToBeCreated) + "/" + encodeURI(content.title) + "/" + encodeURI(usersList[i].email);
            })
    
            obj.communityActionOpportunities.forEach((content) => {
                content.feedbackLink = "http://localhost:4200/feedback/" + encodeURI(state) + "/" + encodeURI(city) + "/" + encodeURI(contentCategories.dateToBeCreated) + "/" + encodeURI(content.title) + "/" + encodeURI(usersList[i].email);
            })

            //order each content type based on user interests
            obj.events = sortContent.sortContent(obj.events, usersList[i].interests);
            obj.councilMeetingUpdates = sortContent.sortContent(obj.councilMeetingUpdates, usersList[i].interests);
            obj.townInTheNews = sortContent.sortContent(obj.townInTheNews, usersList[i].interests);
            obj.communityActionOpportunities = sortContent.sortContent(obj.communityActionOpportunities, usersList[i].interests);
    
            const msg = {
                to: usersList[i].email,
                from: 'acta.solutions@gmail.com',
                subject: 'Update from ' + city,
                html: compiledTemplate.render({cityContentData: obj})
            };
            
            //UNCOMMENT THIS TO SEND EMAIL!
            sgMail.send(msg);
        }

        done();
    }
};
