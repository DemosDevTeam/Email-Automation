const mongoose = require('mongoose');
let mcAnswerSchema = new mongoose.Schema({
    answerChoice: String,
    responses: [String]
})

let frQuestionSchema = new mongoose.Schema({
    question: String,
    responses: [String]
})

let mcQuestionSchema = new mongoose.Schema({
    question: String,
    answerChoices: [mcAnswerSchema]
})

let contentSchema = new mongoose.Schema({
    title: String,
    text: String,
    contentTags: [String],
    imageUrl: String,
    associatedMCQuestions: [mcQuestionSchema],
    associatedFRQuestions: [frQuestionSchema]
});

let fullContentSchema = new mongoose.Schema({
    events: [contentSchema],
    councilMeetingUpdates: [contentSchema],
    townInTheNews: [contentSchema],
    communityActionOpportunities: [contentSchema],
    dateToBeCreated: String
})

const CityContentSchema = mongoose.Schema({
   cityName: String,
   stateName: String,
   contentCategories: [fullContentSchema]
});

let CityContent = module.exports = mongoose.model('CityContent', CityContentSchema);

module.exports.createCityContent = (newCityContent, callback)=>{
    newCityContent.save(callback);
};
