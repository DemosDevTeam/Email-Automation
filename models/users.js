const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});


let Users = module.exports = mongoose.model('Users', UsersSchema);

module.exports.createUsers = (newUsers, callback)=>{
    newUsers.save(callback);
};

