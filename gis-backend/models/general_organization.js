var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var general_organizationSchema = new Schema ({
	organization_type_id: Schema.Types.ObjectId,
	conventional_type_id: Schema.Types.ObjectId,
	type_id: Schema.Types.ObjectId,
	name: String
});

module.exports = mongoose.model('General_Organization', general_organizationSchema);
