const express = require('express');
const router = express.Router();
const cityContent = require('../Functions/cityContentFunctions');

let events = {},
    councilMeetingUpdates = {},
    townInTheNews = {},
    communityActionOpportunities= {};

let city
    ,dateToBeCreated,
    state;


//Andrew added endpoint
router.post('/uploadCityContent', async (req, res) => {

    //parse out relevant information from request body and into vars to be used in write to db and scheduling emial
    city = req.body.cityName;
    state = req.body.stateName;
    events = req.body.events;
    councilMeetingUpdates = req.body.councilMeetingUpdates;
    townInTheNews = req.body.townInTheNews;
    communityActionOpportunities = req.body.communityActionOpportunities;
    dateToBeCreated = req.body.dateToBeCreated;

    let contentCategories = cityContent.saveCityBlock(city,state,dateToBeCreated,events,councilMeetingUpdates,townInTheNews,communityActionOpportunities);
    let users = await cityContent.subscribedEmailList(city,state);
    await cityContent.scheduleEmail(city,state,dateToBeCreated,users,contentCategories);

    //send successful response for scheduled email
    res.json({
        status: 200,
        message: "Successfully uploaded content!"
    })
})

//Malhotra legacy code
/*
router.post('/events',(req,res)=>{
    console.log(req.body);
    events = req.body;
    res.sendStatus(200);
});

router.post('/councilMeetingUpdates',(req,res)=>{
    console.log(req.body);
    councilMeetingUpdates = req.body;
    res.sendStatus(200);
});

router.post('/townInTheNews',(req,res)=>{
    console.log(req.body);
    townInTheNews = req.body;
    res.sendStatus(200);
});

router.post('/communityActionOpportunities',(req,res)=>{
    console.log(req.body);
    communityActionOpportunities = req.body;
    res.sendStatus(200);
});

router.post('/dateAndTime',async (req,res)=>{
   console.log("inside of /dateAndTime request handler");
   console.log("logging date and time req body");
   console.log(req.body);
   console.log("logging the type of the dateTime var from req body");
   console.log(typeof req.body.dateToBeCreated);
   city = req.body.city;
   state = req.body.state;
   dateToBeCreated = req.body.dateToBeCreated;
   let contentCategories = cityContent.saveCityBlock(city,state,dateToBeCreated,events,councilMeetingUpdates,townInTheNews,communityActionOpportunities);
   let users = await cityContent.subscribedEmailList(city,state);
   console.log('users: ',users);
   cityContent.scheduleEmail(city,state,dateToBeCreated,users,contentCategories);

   res.sendStatus(200);

});*/


module.exports = router;
