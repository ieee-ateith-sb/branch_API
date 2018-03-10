var express = require('express');
var router = express.Router();

//--TODO--
//var hidePoweredBy = require('hide-powered-by')
//app.use(hidePoweredBy())

var MessageModel = require('./../model/messages.js');
var MessageData = MessageModel.MessageData;
var mongoose = MessageModel.mongoose; 



//otan bainei sto /messages'/' tote ginontai afta
//Tha ginei post anti gia get. Einai apla dokimastiko
router.get('/', function(req, res, next) {

  res.setHeader('Content-Type', 'application/json');

  //Creating temporary object
  //inserts same record twice FOR SOME REASON
  var temporary = {
  	'name': 'lol',
  	'email': 'mail@it.teithe.gr',
  	'subject': 'Hello',
  	'usermessage': 'Test6 fails'
  };


//Creating temporary record in MessageData model
//Testing validation
MessageData.create(temporary, function (err) {
	if (err) console.log(err); 
  // saved!
console.log('Success');

});
//find all temporary records 
 MessageData.find((err, dbresult)=>{
    if (err) res.send('Could not find anything');
    
      //res.setHeader('Content-Type', 'application/json');
      res.send(dbresult);

  })

});

module.exports = router;
