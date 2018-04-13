//var  eventsData = require('./../data/myevents');

var express = require('express');
var router = express.Router();

var EventModel = require('./../model/event.js');
var EventData = EventModel.EventData;

const empty = {"OK": "empty"};
const err_not_found = {"ERROR": "not found"};
const err_connection = {"ERROR": "connection error"};



// respond to a get query.
// recent events
router.get('/', (req, res, next) => {
	EventData.find({}, (err, eventList)=>{
		if (err) res.json(err_connection);
		else res.json(eventList);
	})
});

router.get(['/upcoming'], function(req, res, next) {
	const upcomingQuery = {
		'date': {
			$gte: new Date(Date.now())
		}
	};

	
	res.setHeader('Content-Type', 'application/json');
	EventData.find(upcomingQuery, (err, eventList)=>{
    if (err) res.json(err_connection);
      res.json({"OK": eventList});
  });
});


router.get('/past', function(req, res, next){
	const pastQuery = {
		'date': {
			$lt: new Date(Date.now())
		}
	};

	res.setHeader('Content-Type', 'application/json');
	EventData.find(pastQuery, (err, eventList)=>{
    if (err) res.json(err_connection);
      res.json({"OK": eventList});
  });
});


module.exports = router;
