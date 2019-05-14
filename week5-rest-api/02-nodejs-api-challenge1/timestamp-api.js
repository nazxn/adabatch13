var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
mongoose.connect('mongodb+srv://restapi:abcd1234@cluster0-rzjxa.mongodb.net/test?retryWrites=true')
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res){
	res.json({message: 'hello, welcome to the pre-timestamp page'});
});

router.get('/:id', function(req, res){
	var ts = req.params.id;

	var natural = new Date(ts*1000).toDateString(); //change from unix to natural date
	if (natural == "Invalid Date"){
		var unix = new Date(req.params.id).getTime()/1000 // change from natural to unix date
	res.json({timestamp: unix, date: req.params.id});
	}
	else {
		
		res.json({timestamp: req.params.id, date: natural});
	}


//to do: if '/hello', then read error/is not a number

})

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port '+port);