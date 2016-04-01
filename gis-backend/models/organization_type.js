var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var organizationTypeSchema = new Schema ({
	name: String
});

module.exports = mongoose.model('Organization_Type', organizationTypeSchema);
