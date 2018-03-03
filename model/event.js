var mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {type: String, default: 'empty_title', trim: true},
  body: {type: String, default: 'empty_body', trim: true}
});

var EventData = mongoose.model('Event', eventSchema);

var exports = module.exports = {
  mongoose,
  EventData
};
