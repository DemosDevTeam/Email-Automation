const jwt = require('jsonwebtoken');
const apiKeys = require('../configuration/config');

module.exports = (req,res,next)=>{

    let token = req.headers['access-token'];
    if(token)
    {
        jwt.verify(token,apiKeys.secret,(err,decoded)=>{
            if(err)
            {
                return res.json({message: 'invalid token'});

            }
            else{
                req.decoded = decoded;
                next();
            }
        });
    }
    else{
        res.status(401).json({
            message: 'No token provided'
        })
    }
};
