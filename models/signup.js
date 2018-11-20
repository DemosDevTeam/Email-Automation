const mongoose = require('mongoose');

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
        type: Array
    },
    city: {
        type: String
    },
    state: {
        type: String
    }
});

let Signup = module.exports = mongoose.model('SignUp', signupSchema);

module.exports.createSignUp = (newSignUp, callback)=>{
    newSignUp.save(callback); //mongoose function
};


