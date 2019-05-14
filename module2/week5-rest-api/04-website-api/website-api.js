var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Store = require('./store.js')
mongoose.connect('mongodb+srv://restapi:abcd1234@cluster0-rzjxa.mongodb.net/test?retryWrites=true')
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res){
	res.json({message: 'hello, and good luck with this api!'});
});

router.post('/store', function(req, res){
	var newStore = new Store();
	newStore.name = req.body.name; // req = request
	newStore.description = req.body.description;
	newStore.address = req.body.address;
	newStore.avgRating = 0; // rating placeholder
	newStore.categories = req.body.categories;
	newStore.contact = req.body.contact;
	newStore.website = req.body.website;
	newStore.openingHours = req.body.openingHours;
	newStore.facilities = req.body.facilities;
	// newStore.openingHours = req.body.openingHours.split(',') // add-on because array
	// newStore.facilities = req.body.facilities.split(',') // add-on because array
	newStore.latitude = req.body.latitude;
	newStore.longitude = req.body.longitude;
	newStore.reviews = [];

	newStore.save(function(err){
		if (err){
			res.send(err);
		}
		else {
			res.json({message: 'Store created successfully!'}) // res = response
		}
	})

})

router.get('/store', function(req, res){
	Store.find(function(err, store){
		if (err){
			res.send(err)
		}
		else{
			res.json(store)
		}
	})
})

router.get('/store/:store_id', function(req, res){
	Store.findById(req.params.store_id, function(err, store){
		if (err){
			res.send(err)
		}
		else{
			res.json(store)
		}
	})
})

router.post('/store/:store_id', function(req, res){
	Store.findById(req.params.store_id, function(err, store){
		if (err){
			res.send(err)
		}
		else{
					store.name = req.body.name; // req = request
					store.description = req.body.description;
					store.address = req.body.address;
					store.avgRating = 0; // rating placeholder
					store.categories = req.body.categories;
					store.contact = req.body.contact;
					store.website = req.body.website;
					store.openingHours = req.body.openingHours;
					store.facilities = req.body.facilities;
					store.latitude = req.body.latitude;
					store.longitude = req.body.longitude;

					store.save(function(err){ //save the store
						if(err){
							res.send(err)
						}
						else{
							res.json({message: 'Store has been updated!'})
						}
					})
				}
			})
})

router.post('/store/:store_id/reviews', function(req, res){
	Store.findById(req.params.store_id, function(err, store){
		if (err){
			res.send(err)
		}
		else{
			store.avgRating = (store.avgRating*store.reviews.length + req.body.rating) / (store.reviews.length+1)

			var newReview = {
				name: req.body.name,
				rating: req.body.rating,
				comment: req.body.comment
			}
			if (store.reviews){
			store.reviews.push(newReview) // adding to the end of existing reviews
			}
			else {
				store.reviews = [newReview] // if no pre-existing reviews
			}
			store.save(function(err){
				if (err){
					res.send(err)
				}
				else{
					res.json({message: 'Review has been added!'})
				}
			})
		}
	})
})

router.get('/store/:store_id/reviews', function(req, res){
	Store.findById(req.params.store_id, function(err, store){
		if (err){
			res.send(err)
		}
		else {
			res.json(store.reviews)
		}
	})
})

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port '+port);
