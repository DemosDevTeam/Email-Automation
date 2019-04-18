const mongoose = require('mongoose');

let interestSchema = mongoose.Schema({
    housing: Number,
    publicSpaces: Number,
    healthAndWellness: Number,
    transportation: Number,
    education: Number,
    environment: Number,
    economicDevelopment: Number
})

const signupSchema = mongoose.Schema({
    email: {
        type: String
    },
    gender: {
        type: String
    },
    race: {
        type: String
    },
    householdIncomeRange: {
        type: String
    },
    ageRange: {
        type: String
    },
    employmentStatus: {
        type: String
    },
    educationLevel: {
        type: String
    },
    numberOfChildren: {
        type: String
    },
    interests: {
        type: interestSchema
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    score: {
        type: Number
    }
});

let Signup = module.exports = mongoose.model('SignUp', signupSchema);

module.exports.createSignUp = (newSignUp, callback)=>{
    newSignUp.save(callback); //mongoose function
};


