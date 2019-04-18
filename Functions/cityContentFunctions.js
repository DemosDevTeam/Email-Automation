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
        let contentCategories = {
            dateToBeCreated: dateToBeCreated,
            events: events,
            councilMeetingUpdates: councilMeetingUpdates,
            townInTheNews: townInTheNews,
            communityActionOpportunities: communityActionOpportunities
        };
        CityContent.find({cityName: cityName, stateName: stateName}, function (err, docs) {
            if (!docs.length)
            {
                console.log('creating new!');
                let newContent = new CityContent({
                    cityName: cityName,
                    stateName: stateName,
                    contentCategories: [contentCategories]
                });
                CityContent.createCityContent(newContent,(err,cityContent)=>{
                    console.log("err message from within createCityContent function call:");
                    console.log(err);
                    console.log("cityContent from within createCityContent");
                    console.log(cityContent);
                });
            }
            else
            {
                console.log('updating existing');
                CityContent.updateOne({cityName: cityName, stateName: stateName},
                    {$push: {contentCategories: contentCategories}},(err,cityContent)=>{

                        if(err)
                        {
                            console.log(err);
                        }
                    });
            }
        });
        return contentCategories;
    },

    scheduleEmail: (city,state,dateToBeCreated,usersList,contentCategories)=>{

        let promise = new Promise( (resolve,reject)=>
        {
            agenda.define('sendEmail'+city+'_'+state,
                (job,done) =>{
                    email.sendEmail(usersList,contentCategories,city,state,done);
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
            console.log("inside of subscribEmailList function (async)");
            //let users = await Signup.find({city: city, state: state}).select('email -_id');
            
            //let arrayEmails = [];
            /*users.map(obj=>{
                console.log("user obj from w/in users.map function" + obj);
                arrayEmails.push(obj.email);
            });
            console.log("value of arrayEmails at end of subscribedEmailList function");
            console.log(arrayEmails);*/
            let users = await Signup.find({city: city, state: state});
            return users;
        }
        catch (e) {
            console.log(e);
        }
    },

    getFeedback: async (city, state, dateToBeCreated, title) => {
        let result = {};
        let cat = '';
        try{
            //get the content category object associated with the city, state, and dateToBeCreated
            result = await CityContent.find({cityName: city, stateName: state}, 
                {contentCategories: 
                    {$elemMatch: 
                        {dateToBeCreated: dateToBeCreated}
                    }
                }
            ).lean();

            result = result[0].contentCategories[0];
            //find the specific piece of data related to the id we are looking for
            let found = false;

            if(!found){
                result.events.forEach((item) => {
                    if(title == item.title){
                        found = true;
                        cat = "events";
                        result = item;
                    }
                })
            }

            if(!found){
                result.councilMeetingUpdates.forEach((item) => {
                    if(title == item.title){
                        found = true;
                        cat = "councilMeetingUpdates";
                        result = item;
                    }
                })
            }

            if(!found){
                result.townInTheNews.forEach((item) => {
                    if(title == item.title){
                        found = true;
                        cat = "townInTheNews";
                        result = item;
                    }
                })
            }
            
            if(!found){
                result.communityActionOpportunities.forEach((item) => {
                    if(title == item.title){
                        found = true;
                        cat = "communityActionOpportunities";
                        result = item;
                    }
                })
            }
            
            return {"result":result, "category": cat};
        }
        catch (e) {
            console.log(e);
        }
    },
    
    giveFeedback: async (response) => {
        console.log("Inside of giveFeedback function call");

        let city = response.city;
        let state = response.state;
        let email = response.email;
        let category = response.category;
        let dateToBeCreated = response.dateToBeCreated;
        let title = response.title;


        for(let i=0; i<response.associatedFRQuestions.length; i++){
            //write responses to db
            switch (category){
                case "events":
                    console.log("inside of events switch");
                    console.log("response.associatedFRQuestions[i]._id");
                    console.log(response.associatedFRQuestions[i]._id);
                    try{
                        let result = await CityContent.updateOne(
                            {
                                "cityName":city, "stateName":state
                            },
                            {
                                "$push":{"contentCategories.$[a].events.$[b].associatedFRQuestions.$[c].responses":response.associatedFRQuestions[i].response}
                            },
                            {
                                "arrayFilters": [{"a.dateToBeCreated":dateToBeCreated},{"b.title":title},{"c.question":response.associatedFRQuestions[i].question}]
                            }
                        )
                        console.log("result from update events:");
                        console.log(JSON.stringify(result));
                    }
                    catch (e){
                        console.log("encountered error");
                        console.log(e);
                    }

                break;

                case "councilMeetingUpdates":
                    console.log("inside of councilMeetingUpdates case");
                    try{
                        let result = await CityContent.updateOne(
                            {
                                "cityName":city, "stateName":state
                            },
                            {
                                "$push":{"contentCategories.$[a].councilMeetingUpdates.$[b].associatedFRQuestions.$[c].responses":response.associatedFRQuestions[i].response}
                            },
                            {
                                "arrayFilters": [{"a.dateToBeCreated":dateToBeCreated},{"b.title":title},{"c.question":response.associatedFRQuestions[i].question}]
                            }
                        )
                        console.log("result from update councilMeetingUpdates:");
                        console.log(JSON.stringify(result));
                    }
                    catch (e){
                        console.log("encountered error");
                        console.log(e);
                    }

                break;

                case "townInTheNews":
                    console.log("inside of townInTheNews case");
                    try{
                        await CityContent.updateOne(
                            {
                                "cityName":city, "stateName":state
                            },
                            {
                                "$push":{"contentCategories.$[a].townInTheNews.$[b].associatedFRQuestions.$[c].responses":response.associatedFRQuestions[i].response}
                            },
                            {
                                "arrayFilters": [{"a.dateToBeCreated":dateToBeCreated},{"b.title":title},{"c.question":response.associatedFRQuestions[i].question}]
                            }
                        )
                    }
                    catch (e){
                        console.log("encountered error");
                        console.log(e);
                    }

                break;

                case "communityActionOpportunities":
                    console.log("inside of communityActionOpportunities case");
                    try{
                        await CityContent.updateOne(
                            {
                                "cityName":city, "stateName":state
                            },
                            {
                                "$push":{"contentCategories.$[a].communityActionOpportunities.$[b].associatedFRQuestions.$[c].responses":response.associatedFRQuestions[i].response}
                            },
                            {
                                "arrayFilters": [{"a.dateToBeCreated":dateToBeCreated},{"b.title":title},{"c.question":response.associatedFRQuestions[i].question}]
                            }
                        )
                    }
                    catch (e){
                        console.log("encountered error");
                        console.log(e);
                    }
                break;
            }



        }

        for(let i=0; i<response.associatedMCQuestions.length; i++){
            let answerChoice;
            for(let j=0; j<response.associatedMCQuestions[i].answerChoices.length; j++){
                if(response.associatedMCQuestions[i].answerChoices[j].count == 1){
                    answerChoice = response.associatedMCQuestions[i].answerChoices[j].answerChoice;
                }
            }
            //write responses to db
            switch (category){
                case "events":
                    console.log("inside of events switch");
                    console.log("response.associatedFRQuestions[i]._id");
                    console.log(response.associatedFRQuestions[i]._id);
                    try{
                        let result = await CityContent.updateOne(
                            {
                                "cityName":city, "stateName":state
                            },
                            {
                                "$push":{"contentCategories.$[a].events.$[b].associatedMCQuestions.$[c].answerChoices.$[d].responses":email}
                            },
                            {
                                "arrayFilters": [{"a.dateToBeCreated":dateToBeCreated},{"b.title":title},{"c.question":response.associatedMCQuestions[i].question},{"d.answerChoice":answerChoice}]
                            }
                        )
                        console.log("result from update events:");
                        console.log(JSON.stringify(result));
                    }
                    catch (e){
                        console.log("encountered error");
                        console.log(e);
                    }

                break;

                case "councilMeetingUpdates":
                    console.log("inside of councilMeetingUpdates case");
                    try{
                        let result = await CityContent.updateOne(
                            {
                                "cityName":city, "stateName":state
                            },
                            {
                                "$push":{"contentCategories.$[a].councilMeetingUpdates.$[b].associatedMCQuestions.$[c].answerChoices.$[d].responses":email}
                            },
                            {
                                "arrayFilters": [{"a.dateToBeCreated":dateToBeCreated},{"b.title":title},{"c.question":response.associatedMCQuestions[i].question},{"d.answerChoice":answerChoice}]
                            }
                        )
                        console.log("result from update events:");
                        console.log(JSON.stringify(result));
                    }
                    catch (e){
                        console.log("encountered error");
                        console.log(e);
                    }

                break;

                case "townInTheNews":
                    console.log("inside of townInTheNews case");
                    try{
                        await CityContent.updateOne(
                            {
                                "cityName":city, "stateName":state
                            },
                            {
                                "$push":{"contentCategories.$[a].townInTheNews.$[b].associatedMCQuestions.$[c].answerChoices.$[d].responses":email}
                            },
                            {
                                "arrayFilters": [{"a.dateToBeCreated":dateToBeCreated},{"b.title":title},{"c.question":response.associatedMCQuestions[i].question},{"d.answerChoice":answerChoice}]
                            }
                        )
                    }
                    catch (e){
                        console.log("encountered error");
                        console.log(e);
                    }

                break;

                case "communityActionOpportunities":
                    console.log("inside of communityActionOpportunities case");
                    try{
                        await CityContent.updateOne(
                            {
                                "cityName":city, "stateName":state
                            },
                            {
                                "$push":{"contentCategories.$[a].communityActionOpportunities.$[b].associatedMCQuestions.$[c].answerChoices.$[d].responses":email}
                            },
                            {
                                "arrayFilters": [{"a.dateToBeCreated":dateToBeCreated},{"b.title":title},{"c.question":response.associatedMCQuestions[i].question},{"d.answerChoice":answerChoice}]
                            }
                        )
                    }
                    catch (e){
                        console.log("encountered error");
                        console.log(e);
                    }
                break;
            }
        }
    }
};
