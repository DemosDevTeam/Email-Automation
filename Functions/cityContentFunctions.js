const Signup = require('../models/signup');
const CityContent = require('../models/cityContent');
const Agenda = require('agenda');
const config = require('../configuration/config');
const email = require('../Functions/emailFunctions');

const agenda = new Agenda({db: {address: config.mongoUri}});


module.exports = {

    saveCityBlock: (city,state,dateToBeCreated,events,councilMeetingUpdates,townInTheNews,communityActionOpportunities)=> {
        let cityName = city;
        let stateName = state;
        let contentCategories = [];
        let obj = {
            dateToBeSubmitted: dateToBeCreated,
            events: events,
            councilMeetingUpdates: councilMeetingUpdates,
            townInTheNews: townInTheNews,
            communityActionOpportunities: communityActionOpportunities
        };
        contentCategories.push(obj);

        CityContent.find({cityName: cityName, stateName: stateName}, function (err, docs) {
            if (!docs.length)
            {
                console.log('creating new!');
                let newContent = new CityContent({
                    cityName: cityName,
                    stateName: stateName,
                    contentCategories: contentCategories
                });
                CityContent.createCityContent(newContent,(err,cityContent)=>{
                });
            }
            else
            {
                console.log('updating existing');
                CityContent.update({cityName: cityName, stateName: stateName},
                    {$push: {contentCategories: contentCategories}},(err,cityContent)=>{

                        if(err)
                        {
                            console.log(err);
                        }
                    });
            }
        });
    },

    scheduleEmail: (city,state,dateToBeCreated,usersList)=>{

        let promise = new Promise( (resolve,reject)=>
        {
            agenda.define('sendEmail'+city+'_'+state,
                (job,done) =>{
                    console.log('Email is sent!!!!');
                    email.sendEmail(usersList,done);
                    done();
                });
            resolve();
        });

        promise.then((value) =>{
            agenda.schedule(dateToBeCreated,'sendEmail'+city+'_'+state);
            agenda.start();
        });
    },

    subscribedEmailList: async (city,state)=>{
        try{
            let users = await Signup.find({city: city, state: state}).select('email -_id');
            let arrayEmails = [];
            users.map(obj=>{
                arrayEmails.push(obj.email);
            });
            return users;
        }
        catch (e) {
            console.log(e);
        }
    }
};
