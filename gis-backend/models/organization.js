var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizationSchema = new Schema ({
	name: String,
	address: String,
	phone: String,
	coord: { latitude: String, longitude: String },
	website: String,
	fs: String,
	pusat: String
});

module.exports = mongoose.model('Organization', organizationSchema);