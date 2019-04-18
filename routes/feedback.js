const express = require('express');
const router = express.Router();
const cityContent = require('../Functions/cityContentFunctions');

router.get('/cityFeedback', async (req, res) => {
    let city = req.query.city;
    let state = req.query.state;
    let dateToBeCreated = req.query.dateToBeCreated;
    let title = req.query.title;

    let feedback = await cityContent.getFeedback(city,state,dateToBeCreated,title);

    for(let i=0; i<feedback.result.associatedFRQuestions.length; i++){
        feedback.result.associatedFRQuestions[i].response = "";
    }

    for(let i=0; i<feedback.result.associatedMCQuestions.length; i++){
        feedback.result.associatedMCQuestions[i].responses = [];
    }

    res.status(200).json(feedback)
})

router.post('/cityFeedback', async (req, res) => {

    await cityContent.giveFeedback(req.body);
    console.log('req body:');
    console.log(req.body);
    res.status(200).json({"msg":"got something back!"})


})

module.exports = router;