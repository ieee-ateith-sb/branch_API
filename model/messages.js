var mongoose = require('mongoose');
var validator = require('validator'); 

const messageSchema = new mongoose.Schema({
  name: {type: String, required: [true,'Name is required :)'], maxlength: 40},
  email: {type: String, validate: [validator.isEmail, 'Invalid e-mail.'], required: [true, 'E-mail is required.'], trim: true, lowercase: true},
  subject: {type: String, required: [true,'Subject is required :)'], maxlength: [60, 'Too long name.']},
  usermessage: {type: String, maxlength: [3000,'If you have more to say, send us an e-mail! :)'], required: [true,'Write more please :D']},
  datetime: {type: Date, default: Date.now}
});


var MessageData = mongoose.model('Message', messageSchema);

var exports = module.exports = {
  mongoose,
  MessageData};
