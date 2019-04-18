const express = require('express');
const router = express.Router();
const Signup = require('../models/signup');

router.post('/',(req,res)=>{
    let newSignUp = new Signup({
        email: req.body.email,
        gender: req.body.gender,
        race: req.body.race,
        householdIncomeRange: req.body.householdIncomeRange,
        ageRange: req.body.ageRange,
        employmentStatus: req.body.employmentStatus,
        educationLevel: req.body.educationLevel,
        numberOfChildren: req.body.numberOfChildren,
        interests:req.body.interests,
        city: req.body.city,
        state: req.body.state
    });

    Signup.createSignUp(newSignUp,(err,signup)=>{
        if(err)
        {
            res.json({
                status: 400,
                message: 'error signing up! Check server log'
            });
        }
        else
        {
            res.json({
                status: 200,
                message: 'successfully signed up!'
            });
            //res.redirect('/');
        }
    })
});

module.exports = router;
