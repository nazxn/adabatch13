var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema  = new Schema ({
	name: String,
	rating: Number,
	comment: String,
	createdAt: {type: Date, default: Date.now}
}) // Mongoose Documentation: Subdocuments (https://mongoosejs.com/docs/subdocs.html)

var StoreSchema = new Schema({
	name: String,
	description: String,
	address: String,
	avgRating: Number,
	categories: [String],
	contact: String,
	website: String,
	openingHours: [String],
	facilities: [String],
	latitude: Number,
	longitude: Number,
	reviews: [ReviewSchema] // Subdocument

});

module.exports = mongoose.model('Store', StoreSchema);