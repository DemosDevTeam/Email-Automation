const mongoose = require('mongoose');

let contentCategoriesSchema = new mongoose.Schema({
    events: Array,
    councilMeetingUpdates: Array,
    townInTheNews: Array,
    communityActionOpportunities: Array,
    dateToBeCreated: String
});

const CityContentSchema = mongoose.Schema({
   cityName: {
       type: String
   },
   stateName: {
       type: String
   },
   contentCategories: [contentCategoriesSchema]
});

let CityContent = module.exports = mongoose.model('CityContent', CityContentSchema);

module.exports.createCityContent = (newCityContent, callback)=>{
    newCityContent.save(callback);
};
