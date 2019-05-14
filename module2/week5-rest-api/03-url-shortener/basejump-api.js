var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// var encodeUrl = require('encodeurl'); // import encodeurl module
var Url = require('./url.js') // change from Places to Url
var currentURL = "http://localhost:8080/api" // sync with server url
mongoose.connect('mongodb+srv://restapi:abcd1234@cluster0-rzjxa.mongodb.net/test?retryWrites=true')
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res){
	res.json({message: 'hello, and good luck with this api!'});
});

router.get('/:short_url', function(req, res){
	Url.findOne({short_url:req.params.short_url}, function(err, url){
		if(err){
			res.send(err);
		}
		if(url){
			res.redirect(url.original_url);
		}
		
	})
})

router.get('/new/*', function(req, res){
	var long_url = req.params[0] // new edit ; so that 'long_url' replaces the 'req.params.long_url'
	Url.findOne({original_url: long_url}, function(err, url){ // to prevent counting the url that's already present in the database
		if (err){
			res.send(err)
		}
		if (url){
			res.json(url)
		}
		else {
		Url.count(function(err, number){ // counting the number of each mentioned URLs
			var newUrl = new Url();
			newUrl.original_url = long_url
			newUrl.short_url = number+1;
			newUrl.save(function(err){
				if (err){
					res.send(err)
				}
				else {
					res.json({original_url: long_url, short_url: currentURL+"/"+(number+1)})
				}
			})
		})
	}
})
})


app.use('/api', router);

app.listen(port);
console.log('Magic happens on port '+port);
