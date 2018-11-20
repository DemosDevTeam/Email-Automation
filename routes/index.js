const express = require('express');
const router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', (req, res) =>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname , '..','views',"landingPage.html"));
});

router.get('/feedback',(req,res)=>{
    res.sendFile(path.join(__dirname , '..','views',"feedback.html"));
});

router.get('/dashboard',(req,res)=>{
    res.sendFile(path.join(__dirname , '..','views',"cityFacingDashboard.html"));
});

module.exports = router;
