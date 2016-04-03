var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Organization_Type = require('./organization_type');
var General_Organization = require('./general_organization');
var Convention_Type = require('./conventional_type');

var organizationSchema = new Schema ({
	organization_type_id: { type: Schema.Types.ObjectId, ref: 'Organization_Type' },
	conventional_type_id: { type: Schema.Types.ObjectId, ref: 'Convention_Type' },
	type_id: Schema.Types.ObjectId,
	sub_type_id: Schema.Types.ObjectId,
	name: String,
	address: String,
	province: {
		_id:Number,
		name:String
	},
	city:{
		_id:Number,
		name:String
	},
	phone: [{
		desc: String
	}],
	coord: { latitude: String, longitude: String },
	asset_size: Number,
	sales_size: Number,
	third_party_funds: Number,
	is_hq: String,
	hq_address: String,
	hq_id: String,
	icon_image: String,
	marker_image: String,
	website: String,
	financial_statement: String,
	general_organization_id: { type: Schema.Types.ObjectId, ref: 'General_Organization' }
});

module.exports = mongoose.model('Organization', organizationSchema);
