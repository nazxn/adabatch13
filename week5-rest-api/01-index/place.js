var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// a schema is similar to mySQL - creating the structure of the table.
// but unlike mySQL, not every category is compulsory. so some can be null for Schema.

var PlaceSchema = new Schema({
	name: String,
	description: String,
	country: String,
	categories: [String],
	createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Place', PlaceSchema);