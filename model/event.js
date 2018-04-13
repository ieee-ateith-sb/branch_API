var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title:    {type: String, default: 'no_title', trim: true},
  subtitle: {type: String, default: '', trim: true},
  date:     {type: Date, default: Date.now},
  location :{type: String, default: '', trim: true},
  organizer:{type: String, default: '', trim: true},
  image    :{type: String, defualt: '', trim: true},
  description: {type: String, default: '', trim: false}
});

var EventData = mongoose.model('Event', eventSchema);

var exports = module.exports = {
  mongoose,
  EventData
};
