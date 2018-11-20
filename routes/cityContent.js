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

router.post('/dateAndTime',(req,res)=>{
   console.log(req.body);
   city = req.body.city;
   state = req.body.state;
   dateToBeCreated = req.body.dateToBeCreated;
   cityContent.saveCityBlock(city,state,dateToBeCreated,events,councilMeetingUpdates,townInTheNews,communityActionOpportunities);
   let users = cityContent.subscribedEmailList(city,state);
   cityContent.scheduleEmail(city,state,dateToBeCreated,users);

   res.sendStatus(200);

});

router.get('/test',(req,res)=>{
    let users = ['vbvrocks84@gmail.com','vbvmalhotra@gmail.com'];
    cityContent.scheduleEmail('Des Moines','Iowa','in 2 minutes',users);
    res.sendStatus(200);
});


module.exports = router;
