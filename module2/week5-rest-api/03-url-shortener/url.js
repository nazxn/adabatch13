var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UrlSchema = new Schema({
	// name: String,
	// description: String,
	// categories: [String],
	// createdAt: {type: Date, default: Date.now}

	original_url: String,
	short_url: Number,
});

module.exports = mongoose.model('Url', UrlSchema);