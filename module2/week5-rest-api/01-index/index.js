var express = require('express'); // call express
var bodyParser = require('body-parser');
// ^ import two languages
var mongoose = require('mongoose')
var Place = require('./place.js') // importig schema from /place.js file
mongoose.connect('mongodb+srv://restapi:abcd1234@cluster0-rzjxa.mongodb.net/test?retryWrites=true')
var app = express(); // define our app using express; create my server

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// using json; json = stuff like randomuser, mongoDB, etc.

var port = process.env.PORT || 8080;
var router = express.Router();
// specify port that you're using

router.get('/', function(req, res) {
	res.json({message: 'hooray! welcome to our api!'});	
});
router.get('/goodbye', function(req, res) {
	res.json({message: 'goodbye! see you soon!'})
}) // will show up at api/goodbye

router.post('/places', function(req, res){
	var place = new Place();
	place.name = req.body.name; // req = request
	place.description = req.body.description;
	place.country = req.body.country;

	place.save(function(err){
		if (err){
			res.send(err);
		}
		else {
			res.json({message: 'Place created'}) // res = response
		}
	})

})

router.get('/places', function(req, res){
	Place.find(function(err, places){
		if (err){
			res.send(err)
		}
		else{
			res.json(places)
		}
	})
	}) // Step R in CRUD => api/places <GET>

router.get('/places/:place_id', function(req, res){
	Place.findById(req.params.place_id, function(err, place){
		if (err){
			res.send(err)
		}
		else{
			res.json(place)
		}
	})
	}) // STEP R in CRUD => api/places/1 <GET>
		// :place_id can be replaced by :id, but make sure if :id, bottom line has to be 'req.params.id' as well!

		router.post('/places/:place_id', function(req, res){
			Place.findById(req.params.place_id, function(err, place){
				if (err){
					res.send(err)
				}
				else{
					place.name = req.body.name
					place.description = req.body.description
					place.country = req.body.country

					place.save(function(err){ //save the place
						if(err){
							res.send(err)
						}
						else{
							res.json({message: 'Place has been updated'})
						}
					})
				}
			})
		}) // STEP U in CRUD => api/places/2 <UPDATE: POST>
		app.use('/api', router);

		app.listen(port);
		console.log('Magic happens on port '+port);

// this is basically a starter template to memorize

