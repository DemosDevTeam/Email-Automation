const mongoose = require('mongoose');

const CityContentSchema = mongoose.Schema({
   cityName: {
       type: String
   },
   stateName: {
       type: String
   },
   contentCategories: [{
        dateToBeSubmitted: String,
        events: Array,
        councilMeetingUpdates: Array,
        newsInTheTown: Array,
        communityActionOpportunities: Array
   }]
});

let CityContent = module.exports = mongoose.model('CityContent', CityContentSchema);

module.exports.createCityContent = (newCityContent, callback)=>{
    newCityContent.save(callback);
};
