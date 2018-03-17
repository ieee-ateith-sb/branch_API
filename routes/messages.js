var express = require('express');
var router = express.Router();

var MessageModel = require('./../model/messages.js');
var MessageData = MessageModel.MessageData;
var Joi = require('joi');


//Joi validator schema
const JoiSchema = Joi.object().options({ abortEarly: false }).keys({
    name: Joi.string().max(40).required().label('Name'),
    email: Joi.string().email().required().label('User Email').trim(),
    subject: Joi.string().max(60).required().label('Subject'),
    usermessage: Joi.string().max(3000).required().label('User Message'),
    //DateTime doesn't need to be validated (check model/messages.js)
});

//otan bainei sto /messages'/' tote ginontai afta
//Tha ginei post anti gia get. Einai apla dokimastiko
router.get('/', function(req, res, next) {

  res.setHeader('Content-Type', 'application/json');

  //Creating temporary object
  var temporary = {
  	'name': 'lollol',
  	'email': 'mail@it.teithe.gr',
  	'subject': '99999999',
  	'usermessage': 'Test Final',
  };

function validation(error,val) {
  //If Joi finds error an error object is created
  if(error){
      let errlength = error.details.length;
      var errarray={};
      for(let i=0 ;i<errlength;i++){
        errarray[i] = {'message': error.details[i].message};
      }
      res.send(errarray); 
      console.log(errarray);
  }else{
    //Inserting into database
    //Creating temporary record in MessageData model
    MessageData.create(temporary, function (err) {
      if (err){
        console.log(err);}
      else {
       // console.log('Success');
        res.send({'message': 'Success'});
      }
     
    /*find all temporary records 
     MessageData.find((err, dbresult)=>{
        if (err) {
          res.send('Could not find anything');
        }else {
          res.send(dbresult);
        }

      })*/

    });
  }

}

//validation function is our callback function ^
Joi.validate(temporary,JoiSchema,validation);






/* comment
*/


});

module.exports = router;
