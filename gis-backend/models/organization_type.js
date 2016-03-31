var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Organization = require('./organization');

var organizationTypeSchema = new Schema ({
	name: String,
	organizations : [{ type: Schema.Types.ObjectId, ref: 'Organization' }]
});

module.exports = mongoose.model('Organization_Type', organizationTypeSchema);
