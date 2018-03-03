var  eventsData = require('./../data/myevents');

var express = require('express');
var router = express.Router();

var EventModel = require('./../model/event.js');
var EventData = EventModel.EventData;


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("this is a line");
  const empty = {empty: "error"}

  EventData.find((err, lalas)=>{
    if (err) return console.error(err);
      res.setHeader('Content-Type', 'application/json');
      res.send(lalas);
  })
  //res.send(empty);
});

module.exports = router;
