const express = require('express');
const router = express.Router();
const apiKeys = require('../configuration/config');
const jwt = require('jsonwebtoken');
const Users = require('../models/users');
const bcrypt = require('bcryptjs');
const auth  = require('../api/auth');

router.post('/signup',(req,res)=>{

    Users.findOne({username: req.body.username},(err,users)=>{
        if(users!==null)
        {
            res.json({
                status: 400,
                message: 'User already exists!'
            });
        }
        else
        {
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(req.body.password, salt);
            let newUser = new Users({
                username: req.body.username,
                email: req.body.email,
                password: hash,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                city: req.body.city,
                state: req.body.state
            });

            Users.createUsers(newUser,(err,user)=>{
                if(err)
                {
                    console.log("Creation Error: ",err);
                    res.json({
                        status: 400,
                        message: 'Error creating user! Check Server log!'
                    });
                }
                res.json({
                    status: 200,
                    newUser: user
                });

            })
        }
    });
});

router.post('/login',(req,res)=>{

    Users.findOne({username: req.body.username},(err,users)=>{
        if(users===null)
        {
            res.json({
                status: 400,
                message: 'Account does not exist!'
            });
        }
        else
        {
            if(req.body.username === users.username && bcrypt.compareSync(req.body.password, users.password))
            {
                //console.log(bcrypt.compare(req.body.password, users.password));
                let token = jsonVerification(req.body.username);
                res.json({
                    status: 200,
                    message: 'authentication done',
                    token: token
                });
            }
            else
            {
                res.json({
                    status: 400,
                    message: "Wrong username or password"
                })
            }
        }
    });
});

router.post('/refreshUser',(req,res)=>{
    let token = jsonVerification(req.body.username);
    res.json({
        status: 200,
        message: 'authentication done',
        token: token
    });

});

router.post('/changePassword', auth, (req,res)=>{
    let username = req.body.username;
    let oldpassword = req.body.oldpassword;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(req.body.newpassword, salt);

    Users.findOne({username: req.body.username},(err,users)=>{
        if(bcrypt.compareSync(oldpassword, users.password))
        {
            Users.findOneAndUpdate({username: username}, {password: hash},(err,users)=>{
                if(err)
                {
                    console.log(err);
                    res.json({
                        status: 400,
                        message: 'Failed to change password'
                    });
                }
                else
                {
                    res.json({
                        status: 200,
                        message: 'Successfully Changed Password'
                    });
                }
            });
        }
        else
        {
            res.json({
                status: 400,
                message: 'Old Password is wrong'
            });
        }
    });
});

let jsonVerification = (username)=>{
    const payload = {
        username: username
    };
    return jwt.sign(payload, apiKeys.secret, {
        expiresIn: 1440 // expires in 24 hours
    });
};

module.exports = router;
